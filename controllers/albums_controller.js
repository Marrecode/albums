const models=require('../models');
const {matchedData, validationResult} = require('express-validator');
const { Album, Photo } = require('../models');

// Get /
const index = async (req, res) => {
    try {
        const all_albums = await models.Album.fetchAll();
    
    res.send({ 
      status: 'succes',
      data: {
        albums: all_albums
      }
    });
}   catch (err) {
        res.status(404).send({
            status: 'fail',
            message: 'resource not found',
        })
    }
}


// Get /:albumid
const show = async (req, res) => {
    try {
        const one_album = await new models.Album({ id: req.params.albumid }).fetch({ withRelated: ['photos'] });

        res.send({ status:'success', 
        data: {one_album} });

}   catch (err) {
        res.status(404).send({
            status: 'fail',
            data: 'resource not found'
        })
    }
}

// POST /
const store = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('create album title req failed validation', errors.array());
        res.status(422).send({
            status: 'fail',
            data: errors.array,
        });
        return;
    }

    const valid = matchedData(req)

    try {
        const album = await new Album(valid).save();
        console.log('created new photo', album);

        res.send({
            status: 'success',
            data: {
                album,
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


// POST /:albumid
const update = (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
}

// POST / albums/albums/albumid/photos
const addAlbum = async (req, res) => {
   
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.status(422).send({
                status: 'fail',
                data: error.array()
            })
            return;
        }
        try {
        const photo = await Photo.fetchById(req.body.photo_id);
        const album = await Album.fetchById(req.params.albumid);
        const photoToAlbum = await album.photos().attach([photo]);

        res.status(201).send({
            status: 'success',
            data: photoToAlbum,
        });

    } catch (err) {
        res.status(500).send({
        status: 'error',
        message: 'error when trying to add photo to album'
        });
        throw error;
    }
}

module.exports = {
    addAlbum,
    index,
    show,
    store,
    update,
}