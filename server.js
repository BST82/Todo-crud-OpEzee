const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables FIRST
dotenv.config();

console.log('Before dotenv config:', process.env.MONGO_URI); // Should be undefined

// Load environment variables FIRST
dotenv.config();

console.log('After dotenv config:', process.env.MONGO_URI); // Should show your URI
console.log('All env vars:', Object.keys(process.env)); // List all loaded variables

// Critical check
if (!process.env.MONGO_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined!');
  process.exit(1);
}

const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

connectDB();

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