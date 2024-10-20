const mongoose = require('mongoose');
const { Schema } = mongoose;

const variantSchema = new Schema({
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    images: {
        type: [String],
    },
});


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    productDetails: {
        type: String,
        required: true,
        trim: true,
    },
    variants: {
        type: [variantSchema],
        required: true,
    },
    dealer: {
        type: Schema.Types.ObjectId,
        ref: 'Dealer',
        required: true,
    },
    stockAvailability: {
        type: Boolean,
        default: true,
    },
    categoryTags: {
        type: [String],
        required: true,
    },
}, { timestamps: true });

productModel = mongoose.model('Product', productSchema);
variantModel = mongoose.model('Variant', variantSchema)
module.exports = { productModel, variantModel }

