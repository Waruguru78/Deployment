const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define routes for your API (CRUD operations for To-Do app, etc.)
// Example route for testing
app.get('/api', (req, res) => {
    res.send('API is running');
});

// Define routes for your To-Do app (or other features)

// Serve static files (React app) in production
if (process.env.NODE_ENV === 'production') {
    // Serve React static files from the build directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Catch-all route to serve React's index.html for any route not handled by API
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
} else {
    // Serve a simple message for non-production (development)
    app.get('/', (req, res) => {
        res.send('API is running in development');
    });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
