// confifure my server

const serverConfiguration = {
    port: 8080,
    host: '127.0.0.1'
}

// define the db 
const dbConfig = {
    mongoDbUrl: "mongodb://localhost:27017/ExpanseManagers-users"
}

// 

// accsing 3rd party api
// api keys, 
// AUthentication Mechanicaionm
const authConfig={
    jwtSecret:'itsmefromsecreatedata'
}
// provide the logger configration
const loggerConfig = {
    appenders: {
        console: { type: 'console' },
        lmsLogs: {
            type: 'file',
            filename: 'logs/lms.log'
        }
    },
    categories: {
        default: { appenders: ['console', 'lmsLogs'], level: 'trace' }
    }

}



module.exports = {
    serverConfiguration,
    dbConfig,
    loggerConfig,
    authConfig
}