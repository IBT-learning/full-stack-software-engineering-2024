import express from "express"
const app = express()


app.get("/",  (req, res) => {
    res.send("<h1>banner<h/>")
});

app.get('/about', (req, res) => {
    res.send("I am humble and an altruist")
});
app.get("/greet/:userName", (req, res) => {
    res.send(`Hello ${req.params.userName}! Greetings`)

});
app.get("/favorite", (req, res) => {
    const fave = req.query.fave
    if(fave){

        res.send(`My favorite thing is ${fave}.`)
    }else{
        res.send("This is not my favorite")
    }
})

app.listen(4000, ()=> 
console.log("listening at port 4000"))

