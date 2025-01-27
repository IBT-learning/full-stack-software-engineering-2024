import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './db.js';
import cors from 'cors';

dotenv.config();
dbConnect();
const app = express();


app.use(express.json());
app.use(cors());

import router from './schema/controllers/user.js';
import postRouter from './schema/controllers/post.js';
app.use('/user', router);
app.use('/post', postRouter);




app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
})