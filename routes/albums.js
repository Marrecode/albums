const express=require('express');
const router= express.Router();
const albumsController = require('../controllers/albums_controller');

// Get all
router.get('/', albumsController.index);

//* GET a specific/
router.get('/:albumid', albumsController.show);

// store new / 
router.post('/', albumsController.store);

// Update a specific / 
router.put('/', albumsController.update);


module.exports = router;
