import { createClient } from '@supabase/supabase-js'

export const supabase = createClient (
    "https://stnoufdleqfuaxnbqnck.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjA3NjM1NSwiZXhwIjoxOTU3NjUyMzU1fQ.TRSyaFxQQG-SC5sIagCCU__7aEwx7qbsQgWi6pRgaO8"
)