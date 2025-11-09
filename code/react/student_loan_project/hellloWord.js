import express from 'express'
const app = express();

app.get('/hello',( req, res) =>{
    res.send('Hello World')
} )

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})