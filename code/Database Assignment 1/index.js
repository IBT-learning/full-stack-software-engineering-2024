import express from 'express';
import {MongoClient} from 'mongodb'

const app = express();
const PORT = 8000;

app.use(express.json());

const client =  new MongoClient('mongodb://localhost:27017')

client.connect(err=>{
    if(err){
        console.error("Error connecting to MongoDB", err);
        } else{;
            console.log("Success connecting to MongoDB")
        }
});

app.post('/', async (req, res) =>{

    console.log(req.body);
     
    const db =  client.db('newDB');
    const collection = db.collection('newCollection');

    const result = await collection.insertOne(req.body);

    res.json({
        message: `Received the following:`,
        data: req.body
    });
});

app.get('/', async (req, res) =>{
    const db = client.db('newDB');
    const collection = db.collection('newCollection');

    const documents = await collection.find({}).toArray();

    res.json(documents);
});


app.listen(PORT, () =>{
    console.log(`listening at port ${PORT}`);
})