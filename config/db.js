const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI); 
};

// Add this export
module.exports = connectDB;