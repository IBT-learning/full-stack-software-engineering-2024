import express from 'express';
import mongodb from 'mongodb';

const app = express();
const PORT = 8000;

app.use(express.json());

import { Long, MongoClient} from 'mongodb'
const client =  new MongoClient('mongodb://localhost')

client.connect()

app.post('/', (req, res) =>{
    console.log(req.body);

    res.json({
        message: `Received the following:`,
        data: req.body
    });
});

app.listen(PORT, () =>{
    console.log(`listening at port ${PORT}`);
})