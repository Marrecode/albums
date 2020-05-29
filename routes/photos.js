const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos_controller')

router.get('/', photosController.index);

/* GET / */
router.get('/:photoid', photosController.show);

// store new / 
router.post('/', photosController.store);

// Update a specific / 
router.put('/', photosController.update);

module.exports = router;
