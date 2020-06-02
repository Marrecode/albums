const express=require('express');
const router= express.Router();
const albumsController = require('../controllers/albums_controller');
const albumvalidation = require('../validation_rules/album');

// Get all
router.get('/albums', albumsController.index);

//* GET a specific/
router.get('/albums/:albumid', albumsController.show);

// store new / 
router.post('/albums', albumvalidation.createRules, albumsController.store);

//Add a photo to Album
router.post('/albums/:albumid/photos', albumvalidation.addPhoto, albumsController.addAlbum);

// Update a specific / 
router.put('/albums/:albumid', albumsController.update);



module.exports = router;
