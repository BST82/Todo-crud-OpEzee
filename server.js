const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables FIRST
dotenv.config();

// Now import other modules that depend on env vars
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

connectDB();  // Now MONGO_URI will be defined

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', require('./routes/todo.routes'));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));