const MongoStore = require('connect-mongo');
const { Cookie } = require('express-session');
const { session_dealer_secret, mongodbUri, session_shopkeeper_secret } = require('../config');

dealerSessionConfig = {
    secret: session_dealer_secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongodbUri })
};

shopkeeperSessionConfig = {
    secret: session_shopkeeper_secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongodbUri })
}

module.exports = {
    dealerSessionConfig,
    shopkeeperSessionConfig
};