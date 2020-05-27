const express=require('express');
const router= express.Router();
const models=require('../models');
 
router.get('/', async (req, res) => {
  const all_albums = await models.Album.findAll();

  res.send({ status:'success all albums', data:{all_albums} });
});


/* GET / */
router.get('/:id', async (req, res) => {
    const one_album = await models.Album.findByPk(req.params.id);
    console.log('first album', first_album)

    res.send({ status:'success get one album', data:{one_album} });
  });


module.exports = router;
