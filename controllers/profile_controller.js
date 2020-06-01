const models = require('../models');
const { matchedData, validationResult } = require('express-validator');

// Get profile/
const getProfile = async (req, res) => {
    if (!req.user) {
        res.status(401).send({
            status: 'fail',
            data: 'authentication failed'
        });
    }
    //const all_users = await models.User.fetchAll()
  
    res.send({ 
        status: 'success gief me the profile of the user', 
        data: { user: req.user}
    });
}

// Get autenticated user photos
const getPhotos = async (req, res) => {
    //const one_user = await new models.User({ id: req.params.usersid }).fetch({ withRelated: ['users']  });
    // get the user with the photoid
   // const one_user = await new models.User({ id: req.params.usersid }).fetch();
    res.send({ status: 'success, the user with the photo', data:{one_user} });
}

/*
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
*/

const updateProfile = async (req, res) => {
    
        res.status(500).send({
            status: 'error',
            message: 'error update',
        })
       throw error;
}





module.exports = {
    getProfile,
    getPhotos,
    updateProfile
}