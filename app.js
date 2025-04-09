const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
dotenv.config();
//ram ram
// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
 mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
   
//routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


// Start the server

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));