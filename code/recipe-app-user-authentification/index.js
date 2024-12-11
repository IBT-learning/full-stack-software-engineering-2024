import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api', recipeRoutes); 

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


 mongoose.connect('mongodb://localhost/recipe-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB', err));

 