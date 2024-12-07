import { mongoose } from "../db.js";
const Blog = new mongoose.Schema ({
    username: String,
    title: String,
    body: String
}, {
    timestamps: true
}
)
 export default mongoose.model("blog", Blog)