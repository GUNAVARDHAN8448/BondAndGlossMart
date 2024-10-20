const mongoose = require("mongoose");
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

const shopKeeperSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    phoneNo: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: addressSchema,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const shopkeeperModel = mongoose.model('Shopkeeper', shopKeeperSchema);
const addressModel = mongoose.model('Address', addressSchema);

module.exports = {
    shopkeeperModel,
    addressModel
}