const models=require('../models');
const { matchedData,validationResult} = require('express-validator');
const { Photo, User } = require('../models');


// Get /
const index = async (req, res) => {
    try {
        // const all_photos = await models.Album.fetchAll();
        const user = await new models.User({ id: req.user.id }).fetch({
          withRelated: "photos"
        });
    
        const photos = user.related("photos");
        res.send({ 
            status: "success", 
            data: { photos } });
      } catch (err) {
            res.status(404).send({
                status: "fail",
                data: "not available"
        });
      }
      const userId = photo.get("user_id");
      if (userId !== req.user.data.id) {
          res.status(401).send({
              status: 'fail',
              message: 'you are not authorized to access photo with id',
          })
      }
    };


// Get /:photoid
const show = async (req, res) => {
    try {
      const photo = await new models.Photo({
        id: req.params.photoid,
        user_id: req.user.id
      }).fetch({ withRelated: ["albums"] });
      res.send({ 
          status: "success", 
          data: { photo } });
    } catch (err) {
        res.status(404).send({
            status: "fail",
            data: "not available"
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
    valid.user_id = req.user.id;
    
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