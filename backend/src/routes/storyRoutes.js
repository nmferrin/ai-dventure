const express = require('express');
const router = express.Router();
const pool = require('../db');

// Test API endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

router.get('/test-db', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT NOW()'); // Simple query to get the current time
      res.json(rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
module.exports = router;
