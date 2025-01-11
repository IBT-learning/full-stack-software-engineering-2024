import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4000;

// app.use(express.json());

app.use(express.static("static"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/todolist', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'to-do-list.json'));
});

// app.get = ("/todos",(req,res)=>{
//     res.sendFile(path.join(import.meta.dirname),"/static/to-do-list.json")
// })

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

