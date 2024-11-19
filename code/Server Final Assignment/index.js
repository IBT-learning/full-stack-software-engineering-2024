import express from 'express';
import path from 'path'; 
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//access public directory
app.use(express.static('public'));


//aboutme html for any /username route
app.get('/:username', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'aboutme.html'));
});

//get blog posts based on username
app.get('/api/:username', async (req,res) => {
   try{

    const username = req.params.username;

    const usernameFilePath = path.join(__dirname, "public","users.json");
    const data = await fs.promises.readFile(usernameFilePath, 'utf-8');

    const users = JSON.parse(data);

    const user = users.find(u =>u.username === username);

    res.json({
        name: user.name,
        username: user.username,
        city: user.city,
        country:user.country,
        blogPosts: user.blogPosts,
        profilePicture: user.profilePicture
    });

}catch (err){

    res.status(500).send("error sending file");
}
})

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})