import mongoose from "mongoose"

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recipes")
    console.log("Connected to the database")
  } catch (err) {
    console.warn("database error")
  }
}

export { dbConnect, mongoose }