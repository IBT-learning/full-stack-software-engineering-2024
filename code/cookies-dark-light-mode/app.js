import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); 

// Endpoint to save a cookie
app.get('/set-cookie', (req, res) => {
    const { mode } = req.query;  
    res.cookie('theme', mode, { maxAge: 900000, httpOnly: true });  
    res.send(`Cookie set to: ${mode}`);
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
