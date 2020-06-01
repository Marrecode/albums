
const { body } = require('express-validator');
const models = require('../models');

const createRules = [
    body('username').isLength({ min: 2}),
    body('first_name').isLength({ min: 2}),
    body('last_name').isLength({ min: 3}),
    body('password').isLength({ min: 3}),
    body('email').isLength({ min: 4}).custom(async value => {
        const emailUser = await new models.User({ email: value}).fetch({ require: false });
        if (emailUser) {
            return Promise.reject('invalid email, email already exist!');
        }
        return Promise.resolve();
}),
];

const updateRules = [
    body('first_name').isLength({ min: 2}),
    body('last_name').isLength({ min: 3}),
    body('password').isLength({ min: 3}),
];

module.exports = {
    createRules,
    updateRules,
}