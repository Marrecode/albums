const express=require('express');
const router= express.Router();
const albumsController = require('../controllers/albums_controller');
const albumvalidation = require('../validation_rules/album');

// Get all
router.get('/', albumsController.index);

//* GET a specific/
router.get('/:albumid', albumsController.show);

// store new / 
router.post('/', albumvalidation.createRules, albumsController.store);

//Add a photo to Album
//http://localhost:3000/albums/albums/2/photos
router.post('/:albumid/photos', albumvalidation.addPhoto, albumsController.addAlbum);

// Update a specific / 
router.put('/:albumid', albumsController.update);



module.exports = router;
