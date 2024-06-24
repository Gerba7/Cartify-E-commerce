const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model',
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    img: {
        type: Array,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    type: {
        type: String,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    discount: {
        type: Boolean,
        default: false,
    },
    discountAmount: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    location: {
        type: String,
    },
    condition: {
        type: String,
    },
    year: {
        type: Number,
        min: 1900,
        max: 2100
    },
    mileage: {
        type: Number,
        min: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
    

}, {timestamps: true}

);

module.exports = mongoose.model("Product", ProductSchema);