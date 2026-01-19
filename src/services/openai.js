const STORAGE_KEY = 'openai-api-key'

/**
 * Get the OpenAI API key, checking env var first then localStorage
 */
export function getApiKey() {
  // Check environment variable first
  const envKey = import.meta.env.VITE_OPENAI_API_KEY
  if (envKey) return envKey

  // Fall back to localStorage
  return localStorage.getItem(STORAGE_KEY) || ''
}

/**
 * Save API key to localStorage
 */
export function saveApiKey(key) {
  localStorage.setItem(STORAGE_KEY, key)
}

/**
 * Check if an API key is configured
 */
export function hasApiKey() {
  return !!getApiKey()
}

/**
 * Collect example questions from user's test history for the prompt
 * 70% from incorrect answers, 30% from correct
 * Weight weak categories higher
 */
export function collectExampleQuestions(results, section, count = 5) {
  const questions = []

  results.forEach(result => {
    const { data } = result
    if (!Array.isArray(data)) return

    data.forEach(s => {
      if (section === 'both' || s.id === section) {
        s.items?.forEach(item => {
          questions.push({
            ...item,
            sectionId: s.id
          })
        })
      }
    })
  })

  if (questions.length === 0) return []

  // Separate correct and incorrect
  const incorrect = questions.filter(q => !q.answer?.correct)
  const correct = questions.filter(q => q.answer?.correct)

  // Calculate target counts (70% incorrect, 30% correct)
  const incorrectCount = Math.ceil(count * 0.7)
  const correctCount = count - incorrectCount

  // Shuffle and select
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)
  const selected = [
    ...shuffle(incorrect).slice(0, incorrectCount),
    ...shuffle(correct).slice(0, correctCount)
  ]

  return shuffle(selected).slice(0, count)
}

/**
 * Build the system prompt for generating SAT questions
 */
function buildSystemPrompt() {
  return `You are an expert SAT test question writer. Generate SAT practice questions that match the official format and difficulty.

For each question, you must output valid JSON in exactly this format:
{
  "prompt": "<p>The question text goes here</p>",
  "passage": { "body": "<p>The passage or context that the question is based on. For reading questions, this is REQUIRED and should be 2-5 sentences providing context.</p>" },
  "answer": {
    "choices": {
      "A": { "body": "<p>First answer choice</p>" },
      "B": { "body": "<p>Second answer choice</p>" },
      "C": { "body": "<p>Third answer choice</p>" },
      "D": { "body": "<p>Fourth answer choice</p>" }
    },
    "correctChoice": "B",
    "rationale": "<p>Detailed explanation of why the correct answer is correct and why each wrong answer is incorrect.</p>"
  },
  "metadata": {
    "PRIMARY_CLASS_CD": "Category code",
    "SECONDARY_CLASS_CD": "Subcategory code",
    "TERTIARY_CLASS_CD": "Skill code"
  },
  "generationReason": "Plain text (no HTML) explanation of why this question was generated based on the student's weak areas",
  "influencedBy": ["id1", "id2"],
  "section": "reading or math (use one of these exact values)"
}

Rules:
- All text content EXCEPT generationReason should be wrapped in HTML paragraph tags <p></p>
- generationReason must be plain text with NO HTML tags
- Use &ldquo; and &rdquo; for smart quotes
- Use &rsquo; for apostrophes
- For math questions, include LaTeX in \\(...\\) for inline math
- IMPORTANT: Reading & Writing questions MUST include a passage with context (a short article, excerpt, or scenario that the question refers to). The passage should be 2-5 sentences.
- Math questions may omit the passage field if the question is self-contained
- Keep rationales concise (2-3 sentences max) - briefly explain the correct answer
- Vary difficulty levels appropriately for SAT
- influencedBy: Array of example question IDs that most influenced this generated question (use the IDs provided with examples). Include 1-2 IDs of questions that were most similar in topic or style.`
}

/**
 * Build the user prompt for generating questions
 */
function buildUserPrompt(section, questionCount, examples, focusOnWeakAreas) {
  let prompt = `Generate ${questionCount} SAT ${section === 'both' ? 'Reading & Writing and Math' : section === 'reading' ? 'Reading & Writing' : 'Math'} questions.`

  if (focusOnWeakAreas && examples.length > 0) {
    prompt += `\n\nHere are example questions from the student's history (focus on similar topics and question types, especially from questions they got wrong):\n\n`

    examples.forEach((q, i) => {
      const isCorrect = q.answer?.correct ? '(answered correctly)' : '(answered incorrectly)'
      const qId = q.questionId || `example-${i + 1}`
      prompt += `Example ${i + 1} ${isCorrect}:\n`
      prompt += `ID: ${qId}\n`
      prompt += `Section: ${q.sectionId}\n`
      prompt += `Category: ${q.metadata?.PRIMARY_CLASS_CD || 'Unknown'}\n`
      prompt += `Subcategory: ${q.metadata?.SECONDARY_CLASS_CD || 'Unknown'}\n`
      if (q.passage?.body) {
        // Strip HTML tags for cleaner example, send up to 500 chars
        const cleanPassage = q.passage.body.replace(/<[^>]*>/g, '').substring(0, 500)
        prompt += `Passage: ${cleanPassage}${cleanPassage.length >= 500 ? '...' : ''}\n`
      }
      prompt += `Question: ${q.prompt?.replace(/<[^>]*>/g, '') || ''}\n`
      prompt += `Correct Answer: ${q.answer?.correctChoice}\n\n`
    })
  }

  prompt += `\nOutput a JSON array of ${questionCount} question objects. Output ONLY the JSON array, no other text.`

  if (section === 'both') {
    const readingCount = Math.ceil(questionCount / 2)
    const mathCount = questionCount - readingCount
    prompt += ` Include ${readingCount} Reading & Writing questions and ${mathCount} Math questions.`
  }

  return prompt
}

/**
 * Generate a single question using OpenAI
 */
async function generateSingleQuestion(apiKey, section, examples, questionNumber, totalQuestions) {
  const sectionText = section === 'both'
    ? (questionNumber % 2 === 0 ? 'math' : 'reading')
    : section

  const prompt = `Generate exactly 1 SAT ${sectionText === 'reading' ? 'Reading & Writing' : 'Math'} question.

${examples.length > 0 ? `Base it on these weak areas from the student's history:
${examples.slice(0, 2).map(q => `- Category: ${q.metadata?.PRIMARY_CLASS_CD || 'Unknown'}, ${q.answer?.correct ? 'correct' : 'incorrect'}`).join('\n')}
` : ''}
Output a single JSON object (not an array). Set "section" to "${sectionText}".`

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-5-mini',
      instructions: buildSystemPrompt(),
      input: prompt,
      max_output_tokens: 8192,
      reasoning: {
        effort: 'low'
      },
      text: {
        format: {
          type: 'json_object'
        }
      }
    })
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error?.message || `API request failed: ${response.status}`)
  }

  const data = await response.json()
  console.log('API response:', JSON.stringify(data, null, 2))

  // Extract content from Responses API format
  const outputItem = data.output?.find(item => item.type === 'message')
  const content = outputItem?.content?.find(c => c.type === 'output_text')?.text

  if (!content) {
    throw new Error(`No content in API response: ${JSON.stringify(data)}`)
  }

  // Parse the JSON response (API returns valid JSON when using json_object format)
  try {
    return JSON.parse(content)
  } catch (e) {
    // Fallback: try fixing invalid escape sequences from LaTeX
    const fixedContent = content.replace(/\\(?!["\\/bfnrtu])/g, '\\\\')
    try {
      return JSON.parse(fixedContent)
    } catch (e2) {
      throw new Error(`Failed to parse JSON. Error: ${e2.message}. Content: ${content.substring(0, 300)}`)
    }
  }
}

/**
 * Generate a practice test using OpenAI
 */
export async function generateTest(options, onProgress) {
  const { section, questionCount, focusOnWeakAreas, results } = options

  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('No API key configured')
  }

  const examples = focusOnWeakAreas ? collectExampleQuestions(results, section, 5) : []
  const questions = []

  for (let i = 0; i < questionCount; i++) {
    if (onProgress) {
      onProgress(i + 1, questionCount)
    }

    const question = await generateSingleQuestion(apiKey, section, examples, i, questionCount)
    questions.push(question)
  }

  // Transform into the expected format with sections
  const readingQuestions = []
  const mathQuestions = []

  questions.forEach((q, idx) => {
    const questionData = {
      ...q,
      questionId: `gen-${Date.now()}-${idx}`,
      displayNumber: String(idx + 1),
      sequence: idx,
      answer: {
        ...q.answer,
        correct: false // Will be set when user takes the test
      }
    }

    // Use the section field from the API response
    const isMath = q.section === 'math' || section === 'math'

    if (isMath) {
      mathQuestions.push({ ...questionData, section: 'Math' })
    } else {
      readingQuestions.push({ ...questionData, section: 'Reading' })
    }
  })

  // Renumber questions within each section
  readingQuestions.forEach((q, i) => {
    q.displayNumber = String(i + 1)
    q.sequence = i
  })
  mathQuestions.forEach((q, i) => {
    q.displayNumber = String(i + 1)
    q.sequence = i
  })

  const sections = []
  if (readingQuestions.length > 0) {
    sections.push({ id: 'reading', items: readingQuestions })
  }
  if (mathQuestions.length > 0) {
    sections.push({ id: 'math', items: mathQuestions })
  }

  return sections
}
