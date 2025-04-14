import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipes.js';  

dotenv.config();

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI);

// Routes
app.use('/recipes', recipeRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

