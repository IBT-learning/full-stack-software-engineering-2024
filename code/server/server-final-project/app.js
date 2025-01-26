import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const PORT = 4000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.static("public"))

app.get("/blogs", (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/blog.json'), 'utf8'))
    res.json(blogs)
})

app.get('/blogs/:id', (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/blog.json'), 'utf8'));
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
  
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
  
    res.json(blog);
  });

app.listen(PORT, () =>{
    console.log(`Listening at port ${PORT}`);
    
})