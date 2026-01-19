-- Add DELETE policy for questions table
-- This allows authenticated users to delete questions

CREATE POLICY "Authenticated users can delete questions"
  ON questions FOR DELETE
  USING (auth.uid() IS NOT NULL);
