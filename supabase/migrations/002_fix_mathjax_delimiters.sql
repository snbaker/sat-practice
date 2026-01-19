-- Fix double-escaped MathJax delimiters in questions table
-- This migration fixes \\( -> \( and \\) -> \) in prompt, passage, and rationale
-- Note: For answer choices (nested JSONB), it's easier to fix via the sync script

-- Helper function to fix delimiters in a string
CREATE OR REPLACE FUNCTION fix_math_delimiters(text_val TEXT)
RETURNS TEXT AS $$
BEGIN
  IF text_val IS NULL THEN
    RETURN NULL;
  END IF;
  RETURN REPLACE(REPLACE(REPLACE(REPLACE(
    text_val,
    '\\\\(', '\\('),
    '\\\\)', '\\)'),
    '\\\\[', '\\['),
    '\\\\]', '\\]');
END;
$$ LANGUAGE plpgsql;

-- Update prompt and passage
UPDATE questions
SET 
  prompt = fix_math_delimiters(prompt),
  passage = fix_math_delimiters(passage),
  answer = jsonb_set(
    answer,
    '{rationale}',
    CASE 
      WHEN answer->>'rationale' IS NOT NULL THEN
        to_jsonb(fix_math_delimiters(answer->>'rationale'))
      ELSE answer->'rationale'
    END
  )
WHERE 
  prompt LIKE '%\\\\(%' OR 
  prompt LIKE '%\\\\)%' OR
  prompt LIKE '%\\\\[%' OR
  prompt LIKE '%\\\\]%' OR
  (passage IS NOT NULL AND (
    passage LIKE '%\\\\(%' OR 
    passage LIKE '%\\\\)%' OR
    passage LIKE '%\\\\[%' OR
    passage LIKE '%\\\\]%'
  )) OR
  (answer->>'rationale' IS NOT NULL AND (
    answer->>'rationale' LIKE '%\\\\(%' OR 
    answer->>'rationale' LIKE '%\\\\)%' OR
    answer->>'rationale' LIKE '%\\\\[%' OR
    answer->>'rationale' LIKE '%\\\\]%'
  ));

-- Note: Answer choices are nested JSONB and harder to update via SQL
-- The sync script will handle those when you rerun it
