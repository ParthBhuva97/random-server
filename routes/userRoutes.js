const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define endpoints for User resource
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
