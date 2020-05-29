const models = require('../models');
const { matchedData, validationResult } = require('express-validator');

// Get users/
const index = async (req, res) => {
    const all_users = await models.User.fetchAll()
  
    res.send({ status: 'success gief me all le users', data:{all_users} });
}

// Get /:userid / get the userid with the the connected photo
const show = async (req, res) => {
    const one_user = await new models.Photo({ id: req.params.usersid }).fetch({ withRelated: ['users']  });
  
    res.send({ status: 'success, the user with the photo', data:{one_user} });
}

// POST /
const store = async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('created user req failed validation', errors.array());

        res.status(422).send({
            status: 'fail',
            data: errors.array(),
        });
        return;
    }

    const validData = matchedData(req);
    try {
        const user = await new models.User(validData).save();
        console.log('created new user', user);

        res.send({
            status: 'success',
            data: {
                user,
            },
        });

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'error when creating a new user.',
        })
        return;
    }

    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
}

// POST /:photoid
const update = (req, res) => {
       res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
}




module.exports = {
    index,
    show,
    store,
    update,
}