const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
const ProfileValidator = require('../validation_rules/profile');


router.get('/', profileController.getProfile);

/* GET / */
router.get('/albums', profileController.getAlbums);

// store new / 
//router.post('/', profileController.createRules, profileController.store);

// Update a specific / 
router.put('/', ProfileValidator.updateProfileRules, profileController.updateProfile);

module.exports = router;