import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static("static"));

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});
