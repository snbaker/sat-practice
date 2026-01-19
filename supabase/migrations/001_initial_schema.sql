-- Initial schema for SAT Practice app
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tests table
CREATE TABLE IF NOT EXISTS tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  generated BOOLEAN DEFAULT false,
  generation_type TEXT,
  category_code TEXT,
  sections JSONB NOT NULL,
  is_public BOOLEAN DEFAULT false,
  shared_with UUID[] DEFAULT ARRAY[]::UUID[]
);

-- Attempts table
CREATE TABLE IF NOT EXISTS attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_id UUID REFERENCES tests(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  responses JSONB NOT NULL,
  score INTEGER,
  correct_count INTEGER,
  total_count INTEGER
);

-- Questions table (shared question bank)
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  section TEXT NOT NULL CHECK (section IN ('reading', 'math')),
  prompt TEXT NOT NULL,
  passage TEXT,
  answer JSONB NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tests_created_by ON tests(created_by);
CREATE INDEX IF NOT EXISTS idx_tests_public ON tests(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_tests_created_at ON tests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_test_id ON attempts(test_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_completed_at ON attempts(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_questions_section ON questions(section);

-- Row-Level Security Policies

-- Enable RLS
ALTER TABLE tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Tests policies
CREATE POLICY "Users can view their own tests"
  ON tests FOR SELECT
  USING (auth.uid() = created_by);

CREATE POLICY "Users can view public tests"
  ON tests FOR SELECT
  USING (is_public = true);

CREATE POLICY "Users can view shared tests"
  ON tests FOR SELECT
  USING (auth.uid() = ANY(shared_with));

CREATE POLICY "Users can create tests"
  ON tests FOR INSERT
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own tests"
  ON tests FOR UPDATE
  USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own tests"
  ON tests FOR DELETE
  USING (auth.uid() = created_by);

-- Attempts policies
CREATE POLICY "Users can view their own attempts"
  ON attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Test creators can view attempts on their tests"
  ON attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM tests
      WHERE tests.id = attempts.test_id
      AND tests.created_by = auth.uid()
    )
  );

CREATE POLICY "Users can create attempts"
  ON attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Questions policies (everyone can read, authenticated users can write)
CREATE POLICY "Everyone can read questions"
  ON questions FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert questions"
  ON questions FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update questions"
  ON questions FOR UPDATE
  USING (auth.uid() IS NOT NULL);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for questions updated_at
CREATE TRIGGER update_questions_updated_at
  BEFORE UPDATE ON questions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
