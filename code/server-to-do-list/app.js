
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from the public folder
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/todos', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/todos.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


