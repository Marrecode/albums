const { body } = require('express-validator');
const models = require('../models');

//create rules for register a new user
const createRules = [body('title').isLength({ min: 3 }),
    ]

const addPhoto = [body('photo_id').custom(value => {
    return models.Photo.fetchById(value);
    }) 
];



module.exports = {
    createRules,
    addPhoto,
}

