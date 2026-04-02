const router = require('express').Router();

const userCtrl = require('./users.controller')

router.post('/register', (req, res) => {

    const response = userCtrl.addUser(req.body);
    res.send(response);
})


router.post('/login', (req, res) => {
    const response = userCtrl.loginUser(req.body);
    res.send(response);

})

module.exports = {
    router
}