
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

    if (!authSchema.toLowerCase() === 'basic') {
        next();
    }

    const decodedPayload = new Buffer(base64payload, 'base64').toString('ascii');

    const [username, password] = decodedPayload.split(':');

    const user = await new User({ username: username, password: password }).fetch({ require: false });
    if (!user) {
        res.status(401).send({
            status: 'fail',
            data: 'authorization required',
        });
        return;
    }

    req.user = user;

    next();
}

module.exports = {
    basic,
}