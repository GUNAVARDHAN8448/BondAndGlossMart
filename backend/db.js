const mongoose = require("mongoose");
const { mongodbUri } = require("../backend/config");
require('dotenv').config()

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(mongodbUri)

        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;