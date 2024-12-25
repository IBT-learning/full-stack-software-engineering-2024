import express from 'express'
import path from 'path'

const app = express();
const PORT = 4000;
const PATH = path.join(import.meta.url, 'public')

app.use(express.static('public'));

app.get('/mode', (req, res) => {
    console.log(`This is a ${req.method} request to ${req.url}`);
    const value = req.query.mode
    
    res.cookie('mode', value, {
        expires: new Date(Date.now() + 10000) // Expires in 10 seconds
    })
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})