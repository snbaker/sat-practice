#!/usr/bin/env node

/**
 * Fetches question(s) from College Board API
 * 
 * Usage:
 *   Single question:
 *     node scripts/fetch-collegeboard-question.cjs <external_id>
 *   
 *   Multiple questions (comma-separated):
 *     node scripts/fetch-collegeboard-question.cjs <id1>,<id2>,<id3>
 * 
 * Environment variables:
 *   CB_AUTH_TOKEN - x-cb-catapult-authentication-token (default: from example)
 *   CB_AUTHZ_TOKEN - x-cb-catapult-authorization-token (default: from example)
 * 
 * Examples:
 *   node scripts/fetch-collegeboard-question.cjs 71c4f33b-5e73-413d-bea3-14225980d694
 *   node scripts/fetch-collegeboard-question.cjs 1db8b470-79f4-47ec-bf07-93ba736045d0,71c4f33b-5e73-413d-bea3-14225980d694
 */

const fs = require('fs')
const path = require('path')

const API_URL = 'https://digitalpractice-api.collegeboard.org/mspractice-studentquestionbank-prod/get-question'
const outputDir = path.join(__dirname, '../public/bank/questions')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Get external_id(s) from command line
const input = process.argv[2]

if (!input) {
  console.error('Error: external_id(s) required')
  console.error('Usage: node scripts/fetch-collegeboard-question.cjs <external_id> or <id1>,<id2>,...')
  process.exit(1)
}

// Parse input - check if it's comma-separated (multiple IDs)
const externalIds = input.includes(',') 
  ? input.split(',').map(id => id.trim()).filter(id => id)
  : [input]

// Get auth tokens from environment or use defaults (from curl example)
const authToken = process.env.CB_AUTH_TOKEN || 'CBLogin 7117746B-5EB8-D12C-0B6D-0B2E32C183F2'
const authzToken = process.env.CB_AUTHZ_TOKEN || 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Njg4MzI1NjcsImNiIjp7ImVudiI6InBpbmUiLCJucyI6InN0IiwibHR0IjoiQ0JMb2dpbiIsInVuIjoiWjlaOTk1ODI1ODg1IiwiZW0iOiJzdWxsaXZhbnBiYWtlckBnbWFpbC5jb20iLCJwaWQiOiIxNDAwNjg4OTIiLCJhaWQiOiI5NTgyNTg4NSIsIm9rdGFBY2NvdW50SWQiOiIwMHVvOHdiN3ZjbjlBclRGRDVkNyIsImF1dGhuTGV2ZWwiOiIyMCIsImRwIjp7ImZpcnN0TmFtZSI6IlN1bGxpdmFuIiwibWlkZGxlSW5pdGlhbCI6bnVsbCwicHJlZmVycmVkRmlyc3RObSI6bnVsbCwiZ3JhZHVhdGlvbkRhdGUiOjE4MTQzMTM2MDAwMDAsImdlbmRlciI6Ik1BTEUiLCJhZGRyZXNzIjp7InN0cmVldDEiOiIzOTUgOHRoIFN0Iiwic3RyZWV0MiI6bnVsbCwic3RyZWV0MyI6bnVsbCwiY2l0eSI6IkJyb29rbHluIiwic3RhdGVDb2RlIjoiTlkiLCJ6aXA0IjoiMzYwNCIsInppcDUiOiIxMTIxNSIsInByb3ZpbmNlIjpudWxsLCJjb3VudHJ5Q29kZSI6IlVTIiwiaW50ZXJuYXRpb25hbFBvc3RhbENvZGUiOm51bGwsImFkZHJlc3NUeXBlIjoiRE9NRVNUSUMifSwic3R1ZGVudFNlYXJjaFNlcnZpY2VPcHRJbiI6IlkiLCJzdHVkZW50U2VhcmNoU2VydmljZU9wdERhdGUiOiIyMDI1LTA0LTExVDE2OjIzOjExLjM0MVoiLCJhZmZpbGlhdGVkT3JnSWQiOiIyNzMxMDQiLCJhZmZpbGlhdGVkT3JnTmFtZSI6Ik1JTExFTk5JVU0gQlJPT0tMWU4gSElHSCBTQ0hPT0wiLCJhaUNvZGUiOiIzMzEwNzkiLCJhaVNyY0NvZGUiOiJDQyIsImNvaG9ydCI6IjIwMjcifX0sImlhdCI6MTc2ODgzMTY2NywiaXNzIjoiY2F0YXB1bHQuY29sbGVnZWJvYXJkLm9yZyIsInN1YiI6InVzLWVhc3QtMTplZmRkNDk0Zi0yNjIzLTQ5ZGYtOGM2YS0xOTM2NTUyNmZhZmUifQ.VsQ5M5BXbYTE50oL04KucFpGoRgaNdQcoDhawQdxuouSrN6Dm1IppftLgHjj94wOGGVEjLvzz7HpQye7j5KGMVZZ1PHSsnYlHwR6JlSr3lDMQNzsy72LOwqFZGEg_C44Rynkpv2b8C_JuAQGeHygdhWkti5qN6sXZ7fgPnGD5YolqxJ7ncUN1KrgRcVYhNWX8gEZhzyOlcaSz8d71ZgNFJq14c1vTohuyIX7cgvmuIWuAMf8yy7C0I2j7xd9vQ9K9lDSin6muKFQc8Iqc3hdPbqUmoJ2TcyKbf35-TyS98F_EvtyiHGg-zrTwC94tJWcL0lHq8OTkFhR-6NemgRTTQ'

async function fetchQuestions(externalIds) {
  const isBatch = externalIds.length > 1
  
  console.log(`Fetching ${externalIds.length} question(s)...`)
  if (isBatch) {
    console.log(`  IDs: ${externalIds.join(', ')}`)
  }

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://mypractice.collegeboard.org',
    'priority': 'u=1, i',
    'referer': 'https://mypractice.collegeboard.org/',
    'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    'x-cb-catapult-authentication-token': authToken,
    'x-cb-catapult-authorization-token': authzToken
  }

  // Try batch format first if multiple IDs
  let body
  if (isBatch) {
    body = JSON.stringify({ external_ids: externalIds })
  } else {
    body = JSON.stringify({ external_id: externalIds[0] })
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: body
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP ${response.status}: ${errorText}`)
    }

    const data = await response.json()
    
    // Handle response - could be single object or array
    const questions = Array.isArray(data) ? data : [data]
    
    console.log(`\n✓ Received ${questions.length} question(s)`)
    
    // Save each question
    questions.forEach((question, index) => {
      const externalId = question.externalid || externalIds[index] || `unknown-${index}`
      const filename = `${externalId.substring(0, 8)}.json`
      const filePath = path.join(outputDir, filename)

      fs.writeFileSync(filePath, JSON.stringify(question, null, 2))
      
      console.log(`  ✓ Saved: ${filePath}`)
      console.log(`    Question ID: ${question.externalid || externalId}`)
    })
    
    return questions
  } catch (error) {
    console.error('Error fetching question(s):', error.message)
    
    // If batch failed, try individual requests
    if (isBatch) {
      console.log('\nBatch request failed, trying individual requests...')
      const results = []
      for (const id of externalIds) {
        try {
          const result = await fetchQuestions([id])
          results.push(...result)
        } catch (e) {
          console.error(`  ✗ Failed to fetch ${id}: ${e.message}`)
        }
      }
      return results
    }
    
    process.exit(1)
  }
}

// Run the script
fetchQuestions(externalIds)
