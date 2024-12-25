import express from 'express';
import { dbConnect } from './db.js';

const app = express();

const PORT = 4000

app.use(express.json())

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400) {
        return res.status(400).send({ error: 'Invalid JSON' });
    }
    next(err); // Pass the error to the next error handler
});

import recipes from './controllers/recipes.js'
app.use('/', recipes)
app.listen(PORT, () => {
    dbConnect()
    console.log(`Server is running on port ${PORT}`);
})