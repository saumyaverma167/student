
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Main API
app.get('/', (req, res) => {
    res.send('My first API is working!');
});

// Student API routes
const studentRoutes = require('./student');

app.use('/api', studentRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
