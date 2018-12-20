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
    subcategoryItem: {
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
    categoryItem: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    }
});
ProductItemShema.methods.generateId = function(password) {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 7; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return id;
  };


// create collection and add schema

mongoose.model('productItem', ProductItemShema);