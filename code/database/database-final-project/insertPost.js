import "dotenv/config"
console.log(process.env.DB_URL)
import { MongoClient } from 'mongodb';


const uri = process.env.DB_URL; 


async function insertPost() {
    const client = new MongoClient(uri);

    try {
        await client.connect(); 
        const database = client.db('BlogAPI'); 
        const posts = database.collection('posts'); 

        // Document to insert
        const newPost = {
            title: "A lawless State",
            body: "Laws are essential in every part of the world",
            username: "Denny"
        };

        const result = await posts.insertOne(newPost);  
        console.log(`Document with id: ${result.insertedId} created successfully`);
    } catch(err){
        console.log("Error connecting to MongoDB:", err);  
    } 
    }

    insertPost();
