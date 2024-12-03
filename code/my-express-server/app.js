const express = require('express');
const app = express();

// Home endpoint
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My First Server!</h1>');
});

// About endpoint
app.get('/about', (req, res) => {
    res.send('I am learning to build servers with Express.');
});

// Greet endpoint
app.get('/greet/:userName', (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Nice to meet you.`);
});

// Favorite endpoint
app.get('/favorite', (req, res) => {
    const queries = req.query;
    if (Object.keys(queries).length > 0) {
        const favorites = Object.entries(queries)
            .map(([key, value]) => `My favorite ${key} is ${value}.`)
            .join(' ');
        res.send(favorites);
    } else {
        res.send('You did not provide any favorite things!');
    }
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for testing
module.exports = app;
