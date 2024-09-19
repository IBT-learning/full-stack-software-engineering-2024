import express from 'express'
const app = express()

import path from 'path'

app.use(express.static("public"))


app.get("/get", (req,res) => {
   res.sendFile(path.join(import.meta.dirname, "/public/newJsonPlaceholder.json"))
 
})



app.listen(4000, () => {
    console.log('listening at port 4000');
    
})

