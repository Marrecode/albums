const bcrypt = require('bcrypt');
const { User } = require('../../models');

const basic = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send({
            status: 'fail',
            data: 'authorization required',
        });
        return;
    }

    const [authSchema, base64payload] = req.headers.authorization.split(' ')

    if (authSchema.toLowerCase() !== 'basic') {
        next();
    }

    const decodedPayload = new Buffer.from(base64payload, 'base64').toString('ascii');

    const [username, password] = decodedPayload.split(':');


    const user = await new User({ username }).fetch({ require: false });
   // const user = await new User({ username: username}).fetch({ require: false });
    if (!user) {
        res.status(401).send({
            status: 'fail',
            data: 'authorizationn required',
        });
        return;
    }
   
    const hash = user.get('password');
    
    const result = await bcrypt.compare(password, hash);

    if (!result) {
        res.status(401).send({
            status: 'fail',
            data: 'authorization required',
        });
        return  
    }
    //const user = await new User({ username: username, password: password }).fetch({ require: false });
    req.user = user;

    next();
}

module.exports = {
    basic,
}