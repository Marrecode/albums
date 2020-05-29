const models = require('../models');


// Get users/
const index = async (req, res) => {
    const all_users = await models.User.fetchAll()
  
    res.send({ status: 'success gief me all le users', data:{all_users} });
}

// Get /:userid / get the userid with the the connected photo
const show = async (req, res) => {
    const one_user = await new models.Photo({ id: req.params.usersid }).fetch({ withRelated: ['users']  });
  
    res.send({ status: 'success, the user with the photo', data:{one_user} });
}

// POST /
const store = (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method not allowed',
    });
}

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