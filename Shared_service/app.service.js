
const api= require('./api/v1');
const bodyparser= require('body-parser');

const apiSetUp=(app)=>{    
    app.use('/api/v1', api);
}

const setMiddleware=(app)=>{

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}))
}

module.exports={
    apiSetUp
}