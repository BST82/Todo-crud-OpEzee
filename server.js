const express = require('express');
const cors = require('cors');
// Always load dotenv (Railway doesn't set NODE_ENV=production)
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI); // Should show now

// Rest of your code remains the same
const connectDB = require('./config/db');

console.log('MONGO_URI:', process.env.MONGO_URI); // Debug log

// Critical check
if (!process.env.MONGO_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined!');
  console.log('All environment variables:', Object.keys(process.env));
  process.exit(1);
}

const userRoutes = require('./routes/user.routes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', require('./routes/todo.routes'));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Welcome to the To-Do API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));