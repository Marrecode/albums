const models=require('../models');
const {matchedData, validationResult} = require('express-validator');
const { Album, Photo } = require('../models');

// Get /
const index = async (req, res) => {
    const all_albums = await models.Album.fetchAll();
  
    res.send({ 
      status: 'succes give me all le albums',
      data: {
        albums: all_albums
      }
    });
  }



// Get /:albumId
const show = async (req, res) => {
    const one_album = await new models.Album({ id: req.params.albumid }).fetch({ withRelated: ['photos'] });

    res.send({ status:'success get one album', data:{one_album} });
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

const addAlbum = async (req, res) => {
   // req.body.album_id
       /* const Photo = await new models.Album.fetchById(req.body.albumid);

        album = await models.Album.fetchById(req.album.data.id);
        const res = await Album.photos().attach(Photo);
*/  
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
        console.log(album);
        const photoToAlbum = await album.photos().attach([photo]);

       //const result = await album.photos().attach(photo);

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