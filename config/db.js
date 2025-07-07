const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI); // Changed from DATABASE_URL to MONGO_URI
  console.log('MongoDB connected successfully!');
};

module.exports = connectDB;