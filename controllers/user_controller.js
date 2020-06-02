
const bcrypt = require('bcrypt');
const models = require('../models');
const { matchedData, validationResult } = require('express-validator');

// Get users/
const index = async (req, res) => {
    const all_users = await models.User.fetchAll()
  
    res.send({ status: 'success gief me all le users', data:{all_users} });
}

// Get /:userid / get the userid with the the connected photo
const show = async (req, res) => {
    const one_user = await new models.User({ id: req.params.usersid }).fetch();
    res.send({ status: 'success, the user with the photo', data:{one_user} });
}

// POST /
const store = async (req, res) => {

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
        const hash = await bcrypt.hash(validData.password, models.User.hashSaltRounds);
        validData.password = hash;
        
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'exception thrown when hashing password',
        });
        throw error;
    }

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
        throw error;
    }
}


const update = async (req, res) => {
    const userId = req.params.usersid;

    const user = await new models.User({ id: userId }).fetch({ require: false});
    if (!user) {
        console.log('user update invalid');
        res.status(404).send({
            status: 'fail',
            data: 'user not found',
        });
        return;
    }

    const errors = validationResult(req);

    const validData = matchedData(req);
    if (!errors.isEmpty()) {
        console.log('update user req failed validation', errors.array());

        res.status(422).send({
            status: 'fail',
            data: errors.array(),
        });
        return;
    }

   
    try {
        const updateUser = await user.save(validData);
        console.log('user updated success', updateUser);

        res.send({
            status: 'success',
            data: {
                updateUser,
            },
        });

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'error when creating a new user.',
        })
        return;
    }
}




module.exports = {
    index,
    show,
    store,
    update,
}