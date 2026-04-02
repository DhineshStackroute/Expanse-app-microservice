// confifure my server

const serverConfiguration = {
    port: 8040,
    host: '127.0.0.1'
}

// define the db 
const dbConfig = {
    "sqllite_url":""
}

// 

// accsing 3rd party api
// api keys, 
// AUthentication Mechanicaionm

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
    
}