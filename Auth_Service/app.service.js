// include db
const db = require('./db');
const bodyparser = require('body-parser')
const logger = require('./logger')

const api = require('./api/v1/index');

// incude the session middles

const session = require('express-session');

// include all middleware in a services
// used to connect all server


const connectToDatabase = () => {
    logger.info("Connecting to Database");
    db.createMongoConnection();
    dbConnection = db.getMongoConnection();
}

// set the middleware required for app

const setMiddleWare = (app) => {
    logger.info("Setting Middleware");
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: false }))

    app.use(session({
        secret: 'ists a secret of nodejs',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false,
            maxAge: 1 * 60 * 60 * 1000
         }
    }));
}

// set the application middleware

const apiSetUp = (app) => {
    logger.info("Setting API");
    app.use('/api/v1', api);
}


module.exports = {
    connectToDatabase,
    setMiddleWare,
    apiSetUp
}