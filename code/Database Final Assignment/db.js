import mongoose from "mongoose"

const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/Posts")
        console.log('[database]: connected to db')
    }catch (err){
        console.warn(`[database error]: ${err}`)
    }
}


export { dbConnect, mongoose}
