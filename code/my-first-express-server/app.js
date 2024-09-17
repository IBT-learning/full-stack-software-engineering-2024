
import express from 'express';
const app = express();

// Home endpoint
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My First Express Server</h1>');
});

// About endpoint
app.get('/about', (req, res) => {
  res.send('A little bit about me: I am learning to build servers with Express!');
});

// Greet endpoint with route parameter
app.get('/greet/:userName', (req, res) => {
  const { userName } = req.params;
  res.send(`Hello, ${userName}! Welcome to my server.`);
});

// Favorite endpoint using query string
app.get('/favorite', (req, res) => {
  const { fave } = req.query;
  if (fave) {
    res.send(`My favorite thing is ${fave}.`);
  } else {
    res.send('I do not have a favorite thing at the moment.');
  }
});

// Set up the listener
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
