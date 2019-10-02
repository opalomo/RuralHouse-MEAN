const { Router } = require('express');

const router = Router();

const _= require('underscore');

const userCtrl = require('../controllers/user.controller');

/******** CRUD FUNCTIONS ********/

// Get all users
router.get('/', userCtrl.getUsers);

// Get specific user
router.get('/:id', userCtrl.getUser);

// Create a new user
router.post('/', userCtrl.createUser);

// Refresh user data
router.put('/:id', userCtrl.editUser);

// Remove user
router.delete('/:id', userCtrl.deleteUser);

/********************************/

module.exports = router;

