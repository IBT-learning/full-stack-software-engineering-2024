import express from "express";
import cookieParse from "cookie-parser";

const app = express();

const port = 4000;
app.use(express.json());
app.use(express.static("static"));
app.use(cookieParse());

app.get("/set-theme", (req, res) => {
  const theme = req.query.theme || "light";
  res.cookie("theme", theme, { maxAge: 3600000, httpOnly: false });
  res.send(`Theme is set to ${theme}`);
});

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
