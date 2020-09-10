const models=require('../models');
const {matchedData, validationResult} = require('express-validator');
const { Album, Photo } = require('../models');



const index = async (req, res) => {
    console.log(req.user.id);
  
    try {
      const user = await new models.User({ id: req.user.id }).fetch({
        withRelated: "albums"
      });
  
      // const albums = await models.Album.fetchAll();
      const all_albums = user.related("albums");
      console.log(all_albums);
  
      res.send({ status: "success", data: { all_albums } });
    } catch (err) {
      res.status(404).send({
        status: "fail",
        data: "resource not founde"
      });
    }
};
// Get /



// Get /:albumid
const show = async (req, res) => {
    try {
      const album = await new models.Album({
        id: req.params.id,
        user_id: req.user.id
      }).fetch({ withRelated: ["photos"] });
      res.send({ 
          status: "success", 
          data: { album } });
    } catch (err) {
        res.status(404).send({
            status: "fail",
            data: "resource not found"
      });
    }
  };

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
    valid.user_id = req.user.id;
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