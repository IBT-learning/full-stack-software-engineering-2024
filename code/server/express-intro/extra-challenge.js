import express from "express"
const app = express()

// Extra challenge (optional)
// Can you re-write the /favorite endpoint to handle an arbitrary number of query parameters? You will have to read the keys as well as the values. (Remember req.query is an object you can loop over.)

// http://localhost:4000/favorite?color=orange&food=stew — "My favorite color is orange. My favorite food is stew."


app.get("/favouite", (req, res) => {
    const queries = req.query;

    res.send(`Here are items you searched for: ${JSON.stringify(queries)}`) // JSON.stringify will convert the params into JSON strings
})


//set up your listener on port 4000
app.listen(4000, () => {
    console.log("starting at port 4000");
})

/** Alternative Method for arbitary number of params(Loop)
 
    app.get("/favourite", (req,res) =>{
    let message = "Here are items you searched for: ";

    for (const [key, value] of Object.entries(req.query)){
    message += `${key} = ${value},`;
    }

    res.send(message)
    })

 Object.entries is used to iterate over the query parameters in the request. 
**/
