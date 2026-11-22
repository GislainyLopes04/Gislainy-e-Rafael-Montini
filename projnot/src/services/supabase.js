import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zwvmuedjemiivetbimtc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dm11ZWRqZW1paXZldGJpbXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzNjQ5MTIsImV4cCI6MjExMDk0MDkxMn0.xpmn63c6tV7laDH1Gyvrz5diEK3rly5gYXO1SlTEsjM';
export const supabase = createClient(supabaseUrl, supabaseKey);