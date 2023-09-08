const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const user_id = 'sp_jagrit_14052001'; // Replace with your actual user_id
const email = 'sj8116@srmist.edu.in'; // Replace with your email
const roll_number = 'RA2011033010121'; // Replace with your roll number

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
      const inputData = req.body.data || '';
      const dataArray = inputData.split(',').map((item) => item.trim());
  
      const numbers = dataArray.filter(item => !isNaN(item));
      const alphabets = dataArray.filter(item => /^[A-Za-z]$/.test(item));
      const highest_alphabet = alphabets.length > 0 ? [alphabets[alphabets.length - 1]] : [];
  
      const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet,
      };
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// GET endpoint
app.get('/bfhl', (req, res) => {
  try {
    const response = {
      operation_code: 1,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
