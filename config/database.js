module.exports = {
    database: 'mongodb://localhost/foodoverflow',
    dbOptions: {
        socketTimeoutMS: 30000,
        keepAlive: true,
        reconnectTries: 30000
    },
    secret: 'do'
}