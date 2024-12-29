import express from 'express';

const app = express();

const PORT = 8000;

app.use(express.static('public'));


app.get("/cookie", (req,res)=>{
    const {mode} = req.query;
    res.cookie("mode", mode, { maxAge: 900000, httpOnly: false});
    res.send(`cookie set`);
});

app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`);
})