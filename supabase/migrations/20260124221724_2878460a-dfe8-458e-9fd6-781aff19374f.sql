-- Create table for storing requests/leads
CREATE TABLE public.requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('calculator', 'contact')),
  name TEXT,
  phone TEXT,
  message TEXT,
  -- Calculator specific fields
  service TEXT,
  area NUMERIC,
  material TEXT,
  finish TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert requests (public form)
CREATE POLICY "Anyone can insert requests"
ON public.requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view requests (for admin panel later)
CREATE POLICY "Authenticated users can view requests"
ON public.requests
FOR SELECT
USING (auth.uid() IS NOT NULL);