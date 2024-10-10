const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

dbConnect(); // Connect to MongoDB

app.use('/api/users', userRoutes);
app.use('/api', postRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
