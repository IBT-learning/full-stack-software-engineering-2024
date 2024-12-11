import express from 'express';   
import path from 'path';        
import { fileURLToPath } from 'url';   
import blogData from './blogData.json' assert { type: "json" };   
const app = express();


const __filename = fileURLToPath(import.meta.url);   
const __dirname = path.dirname(__filename);          
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/blogs', (req, res) => {
  res.json(blogData);
});

 
app.get('/api/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogPost = blogData.find(blog => blog.id === blogId);
  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).send('Blog post not found');
  }
});

 
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
