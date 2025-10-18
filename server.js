import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import syntaxHandler from './api/syntax.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Serve static files from 'public' folder (optional)
app.use('/public', express.static(path.join(__dirname, 'public')));

// API endpoint
app.post('/api/syntax', syntaxHandler);

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
