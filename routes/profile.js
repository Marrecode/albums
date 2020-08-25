const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
const ProfileValidator = require('../validation_rules/profile');


router.get('/', profileController.getProfile);


module.exports = router;