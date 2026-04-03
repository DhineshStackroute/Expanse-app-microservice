// include db
const db= require('./db');
const bodyparser= require('body-parser')
const logger= require('./logger')
const helmat = require('helmet');
const cors= require('cors');
const rateLimit = require("express-rate-limit");    
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    legacyHeaders: false
})

// impoet the auth serice

const authMiddleware =require('../AuthMiddleware/auth/auth')
const api= require('./api/v1')

// include all middleware in a services
// used to connect all server


const connectToDatabase= ()=>{
    logger.info("Connecting to Database");
    db.createMongoConnection();
    dbConnection= db.getMongoConnection();
}

// set the middleware required for app

const setMiddleWare=(app)=>{

    logger.info("Setting Middleware");
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(limiter);
    app.use(helmat(
        {
           contentSecurityPolicy: false,
           xDownloadOptions: false,
           crossOriginEmbedderPolicy: false

        }
    ))
    app.use(cors(
        {
            allowedHeaders: "*",
            exposedHeaders: "*",
            origin: "*",
            methods: "*",
            credentials: true
        }
    ));

    app.use(authMiddleware.isAuthenticatedUser);
}

// set the application middleware

const apiSetUp=(app)=>{
    logger.info("Setting API");
    app.use('/api/v1/', api);
}


module.exports={
    connectToDatabase,
    setMiddleWare,
    apiSetUp
}