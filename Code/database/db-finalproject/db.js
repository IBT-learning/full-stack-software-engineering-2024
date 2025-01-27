import { mongoose } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {})
    console.log(`[database]: connected to db`)
  } catch (err) {
    console.warn(`[database error]: ${err}`)
  }
}

export { dbConnect, mongoose }