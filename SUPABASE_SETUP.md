# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Sign in
3. Click "New Project"
4. Fill in:
   - **Name**: sat-practice (or your choice)
   - **Database Password**: (save this!)
   - **Region**: Choose closest to you
5. Wait for project to be created (~2 minutes)

## 2. Get API Keys

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Publishable key** - This will be either:
     - **New format**: `sb_publishable_xxx...` (for projects created/updated after 2024)
     - **Legacy format**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (older projects)
   - Both formats are safe to use in the browser with RLS enabled

## 3. Set Environment Variables

Create `.env.local` file in project root:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_xxx...  # or eyJ... for legacy projects
```

**Note**: 
- The variable name is `VITE_SUPABASE_ANON_KEY` (works with both new and legacy keys)
- Supabase JS SDK v2.18+ supports both key formats automatically
- New projects use `sb_publishable_...` format, legacy projects use `eyJ...` format

**Important**: Add `.env.local` to `.gitignore` (don't commit keys!)

## 4. Run Database Migration

1. Go to Supabase Dashboard → **SQL Editor**
2. Click **New Query**
3. Copy contents of `supabase/migrations/001_initial_schema.sql`
4. Paste and click **Run**
5. Verify tables were created (check **Table Editor**)

## 5. Configure Authentication

1. Go to **Authentication** → **Settings**
2. Enable **Email** provider (already enabled by default)
3. (Optional) Configure other providers (Google, GitHub, etc.)
4. Set **Site URL** to your app URL (e.g., `http://localhost:5174`)

## 6. Test the Setup

The app will now:
- Show login/signup UI if not authenticated
- Store tests in Supabase when generated
- Allow multiple users to access shared tests
- Track attempts per user

## Features Enabled

✅ **Multi-user support**: Multiple people can use the app
✅ **Test sharing**: Generate tests, others can take them
✅ **Access control**: Users see their own tests + public tests
✅ **Scalable**: Handles thousands of tests/attempts
✅ **Real-time** (optional): Can add real-time updates later

## Troubleshooting

### "Invalid API key"
- Check `.env.local` has correct keys
- Restart dev server after adding env vars

### "Row-level security policy violation"
- Check RLS policies in SQL Editor
- Verify user is authenticated

### "Table doesn't exist"
- Run the migration SQL again
- Check Table Editor to see if tables exist

## Next Steps

1. **Add Auth UI**: Create login/signup components
2. **Migrate existing data**: Import local tests to Supabase
3. **Add sharing UI**: Let users make tests public/share with specific users
4. **Analytics**: Show who took your tests, scores, etc.
