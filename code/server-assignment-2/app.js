console.log("Welcome to the express world");
import  express from 'express';
const app = express ()

//task1
app.get("/", (req, res) => {
    res.send('<h1> Welcome to the Endpoints exploration!! </h1>')
});
//task2
app.get("/about", (req, res) => {
    res.send("I can be anything i set my mind to!")
})
//task3
app.get("/greet/:userName", (req, res) =>{
    const userName = req.params.userName
    res.send(`Hello ${userName}`)
})

app.get("/favorite", (req, res) => {
    if (req.query.fav) {
        res.send(`My favorite thing is ${req.query.fav}`)
    } else {
        
        res.send("That's not my favorite activity")
    }
})
app.listen(4000, () =>{
    console.log("Listening at port 4000") });