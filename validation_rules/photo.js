const { body } = require('express-validator');
const models = require('../models');

//create rules for register a new user
const createRules = [body('title').isLength({ min: 3 }),
    body('url').isLength({ min: 2 }),
    body('comment').optional().isLength({ min: 2 }),
    body('user_id').optional().isLength({ min: 1 }),]

    const updateRules = [
        body("password")
          .optional()
          .isLength({ min: 3 }),
        body("first_name")
          .optional()
          .isLength({ min: 3 }),
        body("last_name")
          .optional()
          .isLength({ min: 3 })
      ];

module.exports = {
    createRules,
    updateRules
}

