const express = require('express');
const storyRoutes = require('./routes/storyRoutes');
require('dotenv').config({ path: '../../env.local' }); 



const app = express();

app.use(express.json());  // Middleware to parse JSON bodies
app.use('/api', storyRoutes);  // Using story related routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
