const mongoose = require('mongoose')

const { dbConfig } = require('../config').appConfig

// create a method to connect with mogodb
function createMongoConnection(){
    mongoose.connect(dbConfig.mongoDbUrl)
}

// get the Mongo Connection Object

function getMongoConnection(){
    return mongoose.connection;
}

module.exports= {
    createMongoConnection,
    getMongoConnection
}