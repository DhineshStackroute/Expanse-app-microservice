const router= require('express').Router();

const auth = require('../auth/auth')

const userCtrl= require('./users.controller');

router.use(auth.isAuthenticatedUser);
router.get('/profile', async(req, res) => {
    
    const response = await userCtrl.getALlUsers();
    res.send(response);
    
})

module.exports= {router}