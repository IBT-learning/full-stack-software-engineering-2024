import express from "express";
import router from "./controller/document.js";

const app = express();
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("connected to database");
  console.log(`server listening on port ${PORT}`);
});
