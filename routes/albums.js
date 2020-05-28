const express=require('express');
const router= express.Router();
const albumsController = require('../controllers/albums_controller');
 
router.get('/', albumsController.index);


/* GET / */
router.get('/:albumid', albumsController.index);


module.exports = router;
