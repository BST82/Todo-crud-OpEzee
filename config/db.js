// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Add explicit check for URI
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB URI is undefined. Check environment variables.');
    }
    
    await mongoose.connect(process.env.MONGO_URI || process.env.DATABASE_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Connection error:', error.message);
    process.exit(1); // Ensure process exits
  }
};

module.exports = connectDB;