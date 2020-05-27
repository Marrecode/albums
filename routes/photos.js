const express = require('express');
const router = express.Router();
const models = require('../models/');



router.get('/', async (req, res) => {
  const all_photos = await models.Photo.findAll()

  res.send({ status: 'success gief me all le photos', data:{all_photos} });
});

/* GET / */
router.get('/:id', async (req, res) => {
  const one_photo = await models.Photo.findByPk(req.params.id)
  console.log('first photo', first_photo)

  res.send({ status: 'success, get one photo', data:{one_photo} });
});



module.exports = router;
