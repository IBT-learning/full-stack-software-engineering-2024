import mongoose from "mongoose"

const dbConnet = async() => {
    try{
        await.mongoose.connect("mongodb://localhost:27017/Posts")
        console.locag('[database]: connected to db')
    }catch (err){
        console.warn(`[database error]: ${err}`)
    }
}


export {dbConnect, mongoose}
