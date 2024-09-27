const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jemitigo23:3Adp4lP5d9tGcdeR@cluster0.q4cqf.mongodb.net/recipe')

    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error: ', err));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const recipeRoutes = require('./routes/recipeRoutes');
app.use('/recipes', recipeRoutes);


