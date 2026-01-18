// SAT Reading & Writing Domain Mappings
export const READING_PRIMARY = {
  INI: 'Information and Ideas',
  CAS: 'Craft and Structure',
  EOI: 'Expression of Ideas',
  SEC: 'Standard English Conventions'
}

export const READING_SECONDARY = {
  // Information and Ideas
  CID: 'Central Ideas and Details',
  INF: 'Inferences',
  COE: 'Command of Evidence',
  // Craft and Structure
  WIC: 'Words in Context',
  TSP: 'Text Structure and Purpose',
  CTC: 'Cross-Text Connection',
  // Expression of Ideas
  SYN: 'Rhetorical Synthesis',
  TRA: 'Transitions',
  // Standard English Conventions
  BOU: 'Boundaries',
  FSS: 'Form, Structure, and Sense'
}

export const READING_TERTIARY = {
  // Central Ideas and Details
  EXP: 'Explicit Information',
  IMP: 'Implicit Information',
  // Inferences
  CAU: 'Cause and Effect',
  INT: 'Interpretation',
  SEQ: 'Sequence',
  // Command of Evidence
  QUA: 'Quantitative Evidence',
  TXT: 'Textual Evidence',
  // Words in Context
  CBC: 'Context-Based Clues',
  DEF: 'Definition',
  // Text Structure and Purpose
  OTS: 'Overall Text Structure',
  PUR: 'Purpose',
  PWR: 'Point of View/Rhetoric',
  // Cross-Text Connection
  POV: 'Point of View',
  // Rhetorical Synthesis
  CTX: 'Context',
  DES: 'Description',
  // Transitions
  AEI: 'Addition/Emphasis/Illustration',
  CAE: 'Cause and Effect',
  SCE: 'Sequence/Contrast/Example',
  STP: 'Summary/Time/Place',
  // Boundaries
  BTS: 'Between Sentences',
  WSC: 'Within Sentence - Comma',
  WSS: 'Within Sentence - Semicolon',
  WSU: 'Within Sentence - Other',
  // Form, Structure, and Sense
  GAP: 'Grammar and Agreement - Pronouns',
  PAA: 'Punctuation and Agreement',
  SMP: 'Subject-Modifier Placement',
  SVA: 'Subject-Verb Agreement',
  VFN: 'Verb Form and Number',
  VTA: 'Verb Tense and Aspect'
}

// SAT Math Domain Mappings
// Based on College Board's content domain codes
export const MATH_PRIMARY = {
  H: 'Algebra',
  P: 'Problem-Solving and Data Analysis',
  Q: 'Advanced Math',
  S: 'Geometry and Trigonometry'
}

export const MATH_SECONDARY = {
  // Algebra (H)
  '1': 'Linear Equations in One Variable',
  '2': 'Linear Equations in Two Variables',
  '3': 'Linear Functions',
  '4': 'Systems of Two Linear Equations',
  '5': 'Linear Inequalities',
  // Problem-Solving and Data Analysis (P)
  '6': 'Ratios, Rates, and Proportions',
  '7': 'Percentages',
  '8': 'One-Variable Data',
  // Advanced Math (Q)
  '9': 'Equivalent Expressions',
  '10': 'Nonlinear Equations',
  '11': 'Nonlinear Functions',
  '12': 'Operations with Polynomials',
  '13': 'Radical and Rational Equations',
  // Geometry and Trigonometry (S)
  '14': 'Area and Volume',
  '15': 'Lines, Angles, and Triangles',
  '16': 'Right Triangles and Trigonometry',
  '17': 'Circles'
}

// Helper function to get human-readable name for a code
export function getTopicName(code, section = 'reading') {
  if (section === 'reading') {
    return READING_PRIMARY[code] || READING_SECONDARY[code] || READING_TERTIARY[code] || code
  } else if (section === 'math') {
    return MATH_PRIMARY[code] || MATH_SECONDARY[code] || code
  }
  return code
}

// Get all mappings for a section
export function getTopicMappings(section = 'reading') {
  if (section === 'reading') {
    return {
      PRIMARY_CLASS_CD: READING_PRIMARY,
      SECONDARY_CLASS_CD: READING_SECONDARY,
      TERTIARY_CLASS_CD: READING_TERTIARY
    }
  } else if (section === 'math') {
    return {
      PRIMARY_CLASS_CD: MATH_PRIMARY,
      SECONDARY_CLASS_CD: MATH_SECONDARY
    }
  }
  return {}
}
