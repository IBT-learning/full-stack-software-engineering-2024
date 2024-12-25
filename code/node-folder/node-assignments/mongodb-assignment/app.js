import express from 'express';
const app = express();

const PORT = 4000
// Middleware to parse JSON requests
app.use(express.json());

import database from './controllers/app.js'
app.use('/', database)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})