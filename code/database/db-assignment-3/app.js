import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Route/auth.route.js";
import recipeRoutes from "./Route/recipes.route.js";

import { connectToDB } from "./db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("api/recipe", recipeRoutes);

app.listen(PORT, () => {
  console.log(`[server]: running on port ${PORT}`);
  connectToDB();
});
