const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
  res.send({ status: 'u had me at helo' });
});

router.use('/photos', require('./photos'));

router.use('/albums', require('./albums'));

module.exports = router;
