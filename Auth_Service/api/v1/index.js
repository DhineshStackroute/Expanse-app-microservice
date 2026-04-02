const router = require('express').Router();

const usersRouter = require('./users');
router.get("/test",(req,res)=>{
    res.send("its a testing endpoint");
})

router.use('/users', usersRouter.router);

module.exports = router;