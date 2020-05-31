const express=require('express');
const router= express.Router();
const albumsController = require('../controllers/albums_controller');

// Get all
router.get('/albums', albumsController.index);

//* GET a specific/
router.get('/albums/:albumid', albumsController.show);

// store new / 
router.post('/albums', albumsController.store);



// Update a specific / 
router.put('/albums/:albumid', albumsController.update);



module.exports = router;
