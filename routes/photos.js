const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos_controller')

router.get('/photos', photosController.index);

/* GET / */
router.get('/photos/:photoid', photosController.show);

// store new / 
router.post('/photos', photosController.store);

// Update a specific / 
router.put('/photos/:photoid', photosController.update);

module.exports = router;
