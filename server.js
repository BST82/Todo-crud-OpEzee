const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', require('./routes/todo.routes'));
// Register route
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
