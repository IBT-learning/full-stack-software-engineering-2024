import express from 'express'
import path from 'path';
import { fileURLToPath} from 'url';
import fs from 'fs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get("/todos",async (req,res) =>{
    try{
    const todosFilePath = path.join(__dirname, 'public',"todos.json");

    const todos = await fs.promises.readFile(todosFilePath, 'utf-8');

    res.json(JSON.parse(todos));
}catch (err){
    res.status(500).send("error sending file");
}
});

app.listen(4000, () =>{
    console.log(`listening at port 4000`);
})