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
        req.session.user = { token: response };
        console.log(req.session.user);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
})


router.delete('/delete', async(req, res) => {

    console.log(req.session.user);
    if (req.session.user.token == null) {
        res.send("Login then use this endpoint");
    }
    else {
        res.send("its a delete endpoint");
    }

})

module.exports = {
    router
}