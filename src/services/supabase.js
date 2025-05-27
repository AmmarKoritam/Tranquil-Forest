// Library
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wsnykrumcxyxpduudpjm.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzbnlrcnVtY3h5eHBkdXVkcGptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MTk2MzksImV4cCI6MjA2MDI5NTYzOX0.z9qAFao9LXirxj8y0ilG0ZhHjGsHXqO0NGLvHnNSVyA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
