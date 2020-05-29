const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller')

router.get('/', usersController.index);

/* GET / */
router.get('/:usersid', usersController.show);

// store new / 
router.post('/', usersController.store);

// Update a specific / 
router.put('/', usersController.update);

module.exports = router;