const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
 mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
   
// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API!');
}
);

// Start the server

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));