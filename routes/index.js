const express = require('express');
const router = express.Router();
const auth = require('../controllers/middlewawres/auth');

/* GET / */
router.get('/', (req, res) => {
  res.send({ status: 'u had me at helo' });
});






router.use('/photos', require('./photos'));
router.use('/albums', require('./albums'));
router.use(auth.basic);
router.use('/users', require('./users'));
router.use('/profile', require('./profile'));

module.exports = router;
