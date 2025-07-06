const express = require('express');
const router = express.Router();
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

router.post('/', createTodo);           // Create
router.get('/', getTodos);              // Read All
router.get('/:id', getTodoById);        // Read One
router.put('/:id', updateTodo);         // Update
router.delete('/:id', deleteTodo);      // Delete

module.exports = router;
