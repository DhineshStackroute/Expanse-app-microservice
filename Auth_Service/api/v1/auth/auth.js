// custome Middlewares to validae and verify the Users
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authConfig } = require('../../../config').appConfig;

// method to handle the password comparion
const comparePassword = async (givenPassword, savedPassword) => {

    try {
        const isMatch = await bcrypt.compare(givenPassword, savedPassword);
        // next(null, isMatch);
        return isMatch
    } catch (err) {
        // next(err);
        return false
    }
}

// method to create a token
const genrateToken = async (payload) => {
    const token = await new Promise((resolve, reject) => {
        jwt.sign(payload, authConfig.jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
    return token;
}

const isAuthenticatedUser = async (req, res, next) => {
    const autherizationHeader = req.get('Authorization');
    if (!autherizationHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }
    const token = autherizationHeader.split(' ')[1];
    try {
        const decoded = await jwt.verify(token, authConfig.jwtSecret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ error: 'Invalid token' });
    }
}
module.exports = {
    comparePassword,
    genrateToken,
    isAuthenticatedUser
}