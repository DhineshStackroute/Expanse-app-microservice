const express=  require('express');
const app= express();
const appservice= require('./app.service');

appservice.apiSetUp(app);

module.exports= app