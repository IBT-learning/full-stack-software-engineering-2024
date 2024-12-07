import mongoose from "mongoose"
const DB_URL = process.env.DB_URL
const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log("Connected to the database")
  } catch (err) {
    console.warn("database error")
  }
}

export { dbConnect, mongoose }