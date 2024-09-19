import express from 'express';
const app = express();
const PORT = 4000;

import cookieParser from 'cookie-parser'

app.use(cookieParser());
app.use(express.static("public"));


app.get('/set-mode', (req, res) => {
  const mode = req.query.mode;
  res.cookie('mode', mode, { maxAge: 900000, httpOnly: true });
  res.send('Mode saved');
});

app.listen(PORT, () =>{
    console.log(`Listening at ${PORT}`);
    
})