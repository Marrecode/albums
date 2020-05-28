const express = require('express');
const router = express.Router();
const models = require('../models/');



router.get('/', async (req, res) => {
  const all_photos = await models.Photo.fetchAll()

  res.send({ status: 'success gief me all le photos', data:{all_photos} });
});

/* GET / */
router.get('/:photoid', async (req, res) => {
  const one_photo = await new models.Photo({ id: req.params.photoid }).fetch({ withRelated: ['albums', 'users']  });

  res.send({ status: 'success, get one photo', data:{one_photo} });
});

module.exports = router;
