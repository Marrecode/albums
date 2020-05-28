const models=require('../models');

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

module.exports = {
    index,
    show,
}