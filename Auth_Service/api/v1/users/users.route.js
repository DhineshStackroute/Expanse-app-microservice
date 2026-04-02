const router = require('express').Router();

const userCtrl = require('./users.controller')
router.post('/register', async (req, res) => {
    try {
        const response = await userCtrl.addUser(req.body);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
})


router.post('/login', async (req, res) => {
    try {
        const response = await userCtrl.validateUser(req.body);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = {
    router
}