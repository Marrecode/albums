const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');
const userValidator = require('../validation_rules/user');


router.get('/', usersController.index);

/* GET / */
router.get('/:usersid', usersController.show);

// store new / 
router.post('/', userValidator.createRules, usersController.store);

// Update a specific / 
router.put('/', userValidator.updateRules, usersController.update);

module.exports = router;