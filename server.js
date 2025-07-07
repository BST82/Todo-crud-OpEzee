const express = require('express');
const cors = require('cors');

// Remove dotenv loading completely
// Only use in development (via .env file)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  console.log('Development: Loading .env file');
}

console.log('MONGO_URI present?', !!process.env.MONGO_URI); // Check existence

const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

// Rest of your code

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