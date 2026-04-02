
const express=  require('express');
// include app services
const appService= require('./app.service');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Create  a Exapanse app usig express
const app = express();

// export the app to other files
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
appService.connectToDatabase();
appService.setMiddleWare(app);
appService.apiSetUp(app);

module.exports = app
