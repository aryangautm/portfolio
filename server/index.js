import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'visitors.json');

// Initialize visitors file if it doesn't exist
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ count: 0 }));
}

// Get visitor count
app.get('/api/visitors', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        res.json({ count: data.count });
    } catch (error) {
        console.error('Error reading visitors file:', error);
        res.status(500).json({ error: 'Failed to get visitor count' });
    }
});

// Increment visitor count
app.post('/api/visitors/increment', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        data.count += 1;
        fs.writeFileSync(dataFile, JSON.stringify(data));
        res.json({ count: data.count });
    } catch (error) {
        console.error('Error updating visitors file:', error);
        res.status(500).json({ error: 'Failed to update visitor count' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

