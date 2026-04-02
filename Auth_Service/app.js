
const express=  require('express');
// include app services
const appService= require('./app.service');

// Create  a Exapanse app usig express
const app = express();

// export the app to other files

appService.connectToDatabase();
appService.setMiddleWare(app);
appService.apiSetUp(app);

module.exports = app
