const mongoose = require('mongoose');
const { Schema } = mongoose;



const orderSchema = new Schema({
    shopkeeper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shopkeeper',
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            variant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Variant',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        }
    ],
    dealer: {
        type: Schema.Types.ObjectId,
        ref: 'Dealer',
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
}, { timestamps: true });

orderModel = mongoose.model('Order', orderSchema);

module.exports = { orderModel }
