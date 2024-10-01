const express = require('express');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My First Express Server!</h1>');
});

app.get('/about', (req, res) => {
    res.send('I am learning how to build web servers with Express.');
});

app.get('/greet/:userName', (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Welcome to my server.`);
});

app.get('/favorite', (req, res) => {
    const { fave } = req.query;
    if (fave) {
        res.send(`My favorite thing is ${fave}.`);
    } else {
        res.send('You did not specify a favorite thing.');
    }
});

app.get('/favorite', (req, res) => {
    const queryParams = req.query;
    const responseStrings = [];

    for (const [key, value] of Object.entries(queryParams)) {
        responseStrings.push(`My favorite ${key} is ${value}`);
    }

    if (responseStrings.length > 0) {
        res.send(responseStrings.join('. ') + '.');
    } else {
        res.send('You did not specify any favorite things.');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
