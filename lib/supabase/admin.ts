import { createClient } from "@supabase/supabase-js"

// Create a Supabase client with the service role key that can bypass RLS
export function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
