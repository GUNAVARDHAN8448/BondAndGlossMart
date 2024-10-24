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
        type: Number,
        require: true,
        trim: true
    },
    shopName: {
        type: String,
        required: true
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

module.exports = {
    shopkeeperModel
}