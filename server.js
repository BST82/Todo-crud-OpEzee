const express = require('express');
const cors = require('cors');
// Always load dotenv (Railway doesn't set NODE_ENV=production)
require('dotenv').config();

console.log('Environment:', process.env.NODE_ENV);
console.log('MONGO_URI:', process.env.MONGO_URI ? '***' : 'UNDEFINED!');

const connectDB = require('./config/db');
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