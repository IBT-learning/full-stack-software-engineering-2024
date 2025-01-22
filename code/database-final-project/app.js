import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import dbConnect from './config/dbConnect.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorController.js';
import { authenticateToken } from './middleware/authMiddleware.js';

dotenv.config();  

const app = express();

// Create a __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use(errorHandler);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Middleware to parse JSON
app.use(express.json());

// Default Route for Frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve profile.html for the profile route
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

 
// Start the Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbConnect()
  console.log(`[Server] Server running on port ${PORT}`)});
