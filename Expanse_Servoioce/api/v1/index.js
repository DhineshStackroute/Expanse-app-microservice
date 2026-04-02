const router=  require('express').Router();

router.use('/expanse', require('./expanse'));

module.exports= router