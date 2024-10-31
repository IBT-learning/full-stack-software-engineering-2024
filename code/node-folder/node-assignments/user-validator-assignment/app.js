import express from 'express';
import { dbConnect } from './db.js';

const app = express();
const PORT = 4000

app.use(express.json())

import recipes from './controllers/recipes.js'
import Users from './controllers/users.js';
import routesError from './middlewares/routeserror.js';

app.use('/users', Users)
app.use('/', recipes)
app.use(routesError)
app.listen(PORT, () => {
    dbConnect()
    console.log(`Server is running on port ${PORT}`);
})