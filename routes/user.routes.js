const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser
} = require('../controllers/user.controller');

// @route   POST /api/users
router.post('/', createUser);

// Optional routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
   //  Login Route
router.post('/login', loginUser); 

module.exports = router;
