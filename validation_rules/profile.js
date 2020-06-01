
const { body } = require('express-validator');


const updateProfileRules = [
    body('first_name').isLength({ min: 2}),
    body('last_name').isLength({ min: 3}),
    body('password').isLength({ min: 3}),
];

module.exports = {
    updateProfileRules
}