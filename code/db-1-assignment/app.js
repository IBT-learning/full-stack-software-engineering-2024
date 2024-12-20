import express from "express"
const app = express()
const PORT = 4000

app.use(express.json())

import newDBrouter from "./controller/newDB.js"
app.use("/", newDBrouter)





app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})