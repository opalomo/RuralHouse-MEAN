const { Router } = require('express');

const router = Router();

const _= require('underscore');

const userCtrl = require('../controllers/house.controller');

/******** CRUD FUNCTIONS ********/

// Get all houses
router.get('/', userCtrl.getHouses);

// Get specific house
router.get('/:id', userCtrl.getHouse);

// Create a new house
router.post('/', userCtrl.createHouse);

// Refresh house data
router.put('/:id', userCtrl.editHouse);

// Remove house
router.delete('/:id', userCtrl.deleteHouse);

/********************************/

module.exports = router;

