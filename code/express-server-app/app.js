const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// app.get('/todos', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'todos.json'));
// });
const fs = require('fs');

app.get('/todos', (req, res) => {
    const userId = req.query.userId;
    fs.readFile(path.join(__dirname, 'public', 'todos.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        let todos = JSON.parse(data);
        if (userId) {
            todos = todos.filter(todo => todo.userId == userId);
        }
        res.json(todos);
    });
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newStatus = req.body.completed;

    fs.readFile(path.join(__dirname, 'public', 'todos.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const todos = JSON.parse(data);
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = newStatus;
            fs.writeFile(path.join(__dirname, 'public', 'todos.json'), JSON.stringify(todos), 'utf8', err => {
                if (err) {
                    res.status(500).send('Error writing file');
                    return;
                }
                res.send('Todo updated');
            });
        } else {
            res.status(404).send('Todo not found');
        }
    });
});




