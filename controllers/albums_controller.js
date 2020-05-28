const models=require('../models');

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
    const one_album = await new models.Album({ id: req.params.albumid }).fetch({ withRelated: ['photos', 'users'] });

    res.send({ status:'success get one album', data:{one_album} });
}

module.exports = {
    index,
    show,
}