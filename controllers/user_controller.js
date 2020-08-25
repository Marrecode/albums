
const bcrypt = require('bcrypt');
const models = require('../models');
const { matchedData, validationResult } = require('express-validator');


const index = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
}
 
const show = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
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