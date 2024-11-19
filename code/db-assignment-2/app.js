import express from "express";
import router from "./controllers/recipe.controllers.js";
import { connectDB } from "./db.js";

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/recipe", router);

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
  connectDB();
});
