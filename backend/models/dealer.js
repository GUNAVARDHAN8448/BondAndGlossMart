const mongoose = require("mongoose");
const { addressModel } = require("./SHOPKEEPER");
const { Schema } = mongoose;

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
        type: addressModel,
        required: true,
    },
}, { timestamps: true });

dealerModel = mongoose.model('Dealer', dealerSchema);
module.exports = { dealermodel }



