const mongoose = require("mongoose");
const { addressModel } = require("./shopkeeper");
const { Schema } = mongoose;
const addressSchema = new Schema({
    firstLine: {
        type: String,
        required: true,
        trim: true
    },
    secondLine: {
        type: String,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        required: true,
    }
});

const dealerSchema = new Schema({
    shopName: {
        type: String,
        required: true,
        trime: true
    },
    dealerName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const dealerModel = mongoose.model('Dealer', dealerSchema);
module.exports = { dealerModel }



