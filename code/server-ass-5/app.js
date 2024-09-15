import express from "express";
const app = express();

const PORT = 4000;

// middleware that sends files in public directory to the client
app.use(express.static("public"));

// get request to this route set cookie for dark theme
app.get("/dark", (req, res) => {
  res.cookie("darkTheme", req.query.mode, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  res.redirect("/");
  console.log(`this endpoint was reached ${req.query.mode}`);
});

// get request to this route set cookie for lightTheme
app.get("/light", (req, res) => {
  res.cookie("lightTheme", req.query.mode, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  res.redirect("/");
  console.log(`this endpoint was reached ${req.query.mode}`);
});

// server listening on port 4000
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
