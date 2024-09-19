import express from "express"
const app = express();
const PORT = 4000

app.use(express.static("public"));

app.get('/api/blogs', (req, res) => {
    import('./newJsonBlogFile.json', { assert: { type: 'json' } })
      .then((module) => {
        res.json(module.default);
      })
      .catch((err) => {
        res.status(500).send('Error loading blog data');
      });
  });
  


app.listen(PORT, () =>{
    console.log(`Listening at port  ${PORT}`);
    
})