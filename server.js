// server.js

const express = require('express');
const app = express();
const port = 3000;

// Import routes
const employeesRoutes = require('./routes/employeesRoutes');

// Use routes
app.use('/api/employees', employeesRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});