const express = require('express');
const router = express.Router();
const auth = require('../controllers/middlewawres/auth');

/* GET / */
router.get('/', (req, res) => {
  res.send({ status: 'success123' });
});

router.use('/register', require('./users'));
router.use(auth.basic);
router.use('/photos', require('./photos'));
router.use('/albums', require('./albums'));
router.use('/profile', require('./profile'));

module.exports = router;

