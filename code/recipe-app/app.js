require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/recipes', recipeRoutes);  
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe App!');
});

// Server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
