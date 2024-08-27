const express = require('express');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('This is a GET request');
});

app.post('/', (req, res) => {
    res.send('This is a POST request');
});

app.put('/', (req, res) => {
    res.send('This is a PUT request');
});
app.delete('/', (req, res) => {
    res.send('This is a DELETE request');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
