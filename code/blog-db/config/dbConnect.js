const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
};

module.exports = dbConnect;
