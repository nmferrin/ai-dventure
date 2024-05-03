const { Pool } = require('pg');
require('dotenv').config();  // Ensure this points correctly to where your .env.local is

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
