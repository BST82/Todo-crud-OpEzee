const Todo = require('../models/todo.model');

// Create a new To-Do
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all To-Dos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single To-Do
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a To-Do
exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'To-Do not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a To-Do
exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'To-Do not found' });
    res.json({ message: 'To-Do deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
