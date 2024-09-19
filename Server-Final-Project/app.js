import express from "express"
const app = express();
const PORT = 4000

app.use(express.static("public"));


app.listen(PORT, () =>{
    console.log(`Listening at port  ${PORT}`);
    
})