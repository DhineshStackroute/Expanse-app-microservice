
const router = require('express').Router();
const sharedController= require('./shared.controller')

router.get('/', async (req, res) => {
    
    try {
        const response = await sharedController.getAllShared();
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }   
})

router.post('/', async(req, res) => {
    
    try {
        const response = await sharedController.addShared(req.body);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports={
    router
}