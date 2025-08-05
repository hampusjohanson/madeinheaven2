import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface User {
  id: string
  email: string
  created_at: string
  is_premium: boolean
  compatibility_checks_used: number
}

export interface CompatibilityCheck {
  id: string
  user_id: string
  sign1: string
  sign2: string
  compatibility_score: number
  created_at: string
} 