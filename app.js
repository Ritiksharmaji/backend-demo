const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["https://your-frontend-url.vercel.app"], // Replace with your actual frontend domain
  methods: ['GET', 'POST'],
  credentials: true
}));

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

// Start server and connect to MongoDB
const server = () => {
  db(); // Connect to MongoDB
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

server();
