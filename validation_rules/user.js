
const { body } = require('express-validator');

const createRules = [
    body('first_name').isLength({ min: 2}),
    body('last_name').isLength({ min: 3}),
    body('password').isLength({ min: 3}),
    body('email').isLength({ min: 4}),
];

const updateRules = [];

module.exports = {
    createRules,
    updateRules,
}