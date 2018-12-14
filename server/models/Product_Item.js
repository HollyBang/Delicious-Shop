const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const ProductItemShema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },

    date:{
        type: Date,
        default: Date.now()
    }
});

// create collection and add schema

mongoose.model('productItem', ProductItemShema);