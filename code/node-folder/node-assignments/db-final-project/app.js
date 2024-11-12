import "dotenv/config"
import cors from "cors"

import express from 'express';
import { dbConnect } from './db.js';

const app = express();
const PORT = process.env.SERVER_PORT

app.use(express.json());
app.use(cors())

import Users from './controllers/users.js';
import Posts from './controllers/posts.js';
import jsonError from './middlewares/jsonError.js';

app.use('/users', Users)
app.use('/posts', Posts)
app.use(jsonError)
app.listen(PORT, () => {
    dbConnect();  // Connect to the MongoDB database before starting the server.
    console.log(`Server is running on port ${PORT}`);
})