const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos_controller')




router.get('/', photosController.index );

/* GET / */
router.get('/:photoid', photosController.index );

module.exports = router;
