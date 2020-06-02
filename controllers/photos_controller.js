const models=require('../models');
const { matchedData,validationResult} = require('express-validator');
const { Photo }=require('../models');

// Get /
const index = async (req, res) => {
    const all_photos = await models.Photo.fetchAll()
  
    res.send({ status: 'success gief me all le photos', data:{all_photos} });
}

// Get /:photoid
const show = async (req, res) => {
    const one_photo = await new models.Photo({ id: req.params.photoid }).fetch({ withRelated: ['albums', 'users']  });
  
    res.send({ status: 'success, get one photo', data:{one_photo} });
}

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
    }

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
}
 /*   res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
    /*/


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