import express from "express"
const app = express()

// / — your home endpoint. Send an html <h1> header with a banner for your page
app.get("/", (req, res) => {
    res.send("<h1> Floxy blogging site</h1>")
})

// /about — send a short sentence about yourself
app.get("/about", (req, res) => {
    const data = {
        name: " Floxy",
        occupation: "Software Engineer",
        hobbies: ["dancing","movies"],
        passion: ["Artificial Intelligence", "Software Developmenet"]
    }

    const bio = (`${data.name} is a skilled and an experienced ${data.occupation}. She is currently enhancing her expertise in ${data.passion[0]} and ${data.passion[1]}.<br>
        Her hobbies include ${data.hobbies[0]} and enjoying ${data.hobbies[1]}.<br>
        ${data.name} is detail-oriented, highly adaptable, and passionate about using technology to drive innovation in Ghana's economic sectors.`)

    res.send(bio)
})

// /greet/:userName — send a template string that greets each person by name
app.get("/greet/:userName", (req, res) =>{
    const name = req.params.userName
    res.send(`Hello ${name} 😊`)
})

// /favorite — utilize query strings at this endpoint
// if a query string fave is included...
// send a template string that says "My favorite thing is" and include the value of the query string
example: http://localhost:4000/favorite?fave=eating will produce "My favorite thing is eating"
// if fave is not included in the query string, send a sensible message instead
app.get("/favourite", (req,res) =>{
    if(req.query.fave){
    const favourite = req.query.fave
    res.send(`My favorite thing is ${favourite}`)
    }
    else{
        res.send("Hey 😊, what do you like doing? ")
    }
})


//set up your listener on port 4000
app.listen(4000, () => {
    console.log("starting at port 4000");
})
