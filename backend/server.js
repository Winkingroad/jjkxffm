require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json());

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Form submission endpoint
app.post('/api/register', async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = ['team_name', 'contact_person', 'contact_number', 'contact_email', 'city', 'college'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert([formData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save registration' });
    }

    res.status(201).json({ 
      success: true, 
      message: 'Registration saved successfully!',
      data: data 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
