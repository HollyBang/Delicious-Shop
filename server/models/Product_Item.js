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
    // allowComments: {
    //     type: Boolean,
    //     default: true
    // },
    // comments: [{
    //     commentBody: {
    //         type: String,
    //         required: true,
    //     },
    //     commentDate: {
    //         type: Date,
    //         default: Date.now()
    //     },
    //     // commentUser:{
    //     //     type: Schema.Types.ObjectId,
    //     //     ref:'users'
    //     // }
    // }],
    // user:{
    //     type: Schema.Types.ObjectId,
    //     ref:'users'
    // },
    date:{
        type: Date,
        default: Date.now()
    }
});

// create collection and add schema

mongoose.model('productItem', ProductItemShema);