const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI); 
  console.log('MongoDB connected successfully!');
};

module.exports = connectDB;