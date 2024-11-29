import express from 'express';

const app = express();
const port = 4000; 

// GET endpoint
app.get('/', (req, res) => {
  res.send('You called the GET endpoint');
});

// POST endpoint
app.post('/', (req, res) => {
  res.send('You called the POST endpoint');
});

// PUT endpoint
app.put('/', (req, res) => {
  res.send('You called the PUT endpoint');
});

// DELETE endpoint
app.delete('/', (req, res) => {
  res.send('You called the DELETE endpoint');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
