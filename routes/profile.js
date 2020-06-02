const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
const ProfileValidator = require('../validation_rules/profile');


router.get('/', profileController.getProfile);

/* GET The User with the photo/ */
router.get('/photos', profileController.getPhoto);


module.exports = router;