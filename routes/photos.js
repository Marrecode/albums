const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos_controller');
const photovalidation = require('../validation_rules/photo');

router.get('/', photosController.index);

/* GET / */
router.get('/:photoid', photosController.show);

// store new / 
router.post('/', photovalidation.createRules,photosController.store);

// Update a specific / 
router.put('/:photoid', photosController.update);

module.exports = router;
