const models=require('../models');
const { matchedData,validationResult} = require('express-validator');
const { Photo }=require('../models');
const photo = require('../validation_rules/photo');

// Get /
const index = async (req, res) => {
    try {
    const all_photos = await models.Photo.fetchAll()
        res.send({ status: 'success', 
            data:{all_photos} });
    } catch (err) {
        res.status(404).send({
            status: 'fail',
            data: 'not available'
        })
    }
};


// Get /:photoid
const show = async (req, res) => {
    try {
        const one_photo = await new models.Photo({ id: req.params.photoid }).fetch({ withRelated: ['albums', 'users']  });
        res.send({ status: 'success', 
            data: {one_photo} });
    } catch (err) {
        res.status(404).send({
            status: 'fail',
            data: 'no photos available'
        });
    }
};

// POST /
const store = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('create photo req failed validation', errors.array());
        res.status(422).send({
            status: 'fail',
            data: errors.array,
        });
        return;
    };

    const valid = matchedData(req)

    try {
        const photo = await new Photo(valid).save();
        console.log('created new photo', photo);

        res.send({
            status: 'success',
            data: {
                photo,
            },
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'exception thrown in database when trying to create'
        });
        throw error;
    }
};

    


// POST /:photoid
const update = (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
};

module.exports = {
    index,
    show,
    store,
    update,
}