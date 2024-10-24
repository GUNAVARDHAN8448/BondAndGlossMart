require('dotenv').config();


module.exports = {
  port: process.env.port,
  mongodbUri: process.env.mongodbUri,
  session_dealer_secret: process.env.session_dealer_secret,
  session_shopkeeper_secret: process.env.session_shopkeeper_secret,
  saltNumber: process.env.saltNumber

};