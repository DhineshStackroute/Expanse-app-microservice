const router = require('express').Router();

const usersRouter = require('./users.route');
const profileRouter = require('./profile.route');

router.use('/u', usersRouter.router);
router.use('/profile', profileRouter.router);

module.exports = {
    router
};
