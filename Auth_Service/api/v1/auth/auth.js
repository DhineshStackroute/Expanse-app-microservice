// custome Middlewares to validae and verify the Users
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authconfig } = require('../../../config').appConfig;

// method to handle the password comparion
const comparePassword = (givenPassword, savedPassword, next) => {
    bcrypt.compare(givenPassword, savedPassword, (err, isMatch) => {
        if (err) {
            return next(err);
        }
        next(null, isMatch);
    })
}

// method to create a token
const genrateToken = (payload, done) => {

    jwt.sign(payload, authconfig.jwtSecret, { expiresIn: '1h' }, done);
}

const isAuthenticatedUser = (req, res, next) => {
    const autherizationHeader = req.get('Authorization');
    if (!autherizationHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }
    const token = autherizationHeader.split(' ')[1];
    jwt.verify(token, authconfig.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Invalid token' });
        }
        req.user = decoded;
        next();
    })
}
module.exports = {
    comparePassword,
    genrateToken,
    isAuthenticatedUser
}