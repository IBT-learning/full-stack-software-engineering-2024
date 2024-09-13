const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

// Use cookie-parser middleware
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to set the theme cookie
app.get('/set-theme', (req, res) => {
  const theme = req.query.theme;
  if (theme) {
    res.cookie('theme', theme, { maxAge: 900000, httpOnly: false });
    res.send(`Theme set to ${theme}`);
  } else {
    res.status(400).send('No theme specified');
  }
});

// Endpoint to reset theme cookie
app.get('/reset-theme', (req, res) => {
  res.clearCookie('theme');
  res.send('Theme cookie cleared');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
