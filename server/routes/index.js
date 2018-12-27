const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const ProductItem = mongoose.model('productItem');

router.get('/apiAdd', function (req, res) {
    res.send({ 'adding a test item,my EMPRAH': 'lolo' })
    let productItemBody = {
        title: 'Pizza' + Math.random(),
        description: 'blah blah blah blah' + Math.random(),
        status: 'it here',
        price: '1' + Math.random() + '$',
        img: 'some src'
    }
    new ProductItem(productItemBody)
        .save()
        .then(product => {
            console.log("test product is added, my Emprah!")
        })
});

router.get('/apiFind/:location', (req, res) => {
    console.log('apifindBODY==>',req.params.location)
    console.log('params form react call apiFind',req.params)
    ProductItem.find({location:req.params.location})
        .then(Product => {
            if(Product){
             res.send(Product);
            }else{
                res.send("error");
            }
            
        })
});

router.get('/apiFind/findFullItem/:productId', (req, res) => {
    console.log('FindFullItem==>',req.params.productId)
    console.log('params form react call apiFind',req.params)

    ProductItem.find({id:req.params.productId})
    .then(Product => {
        if(Product){
         res.send(Product);
        }else{
            res.send("error");
        }
        
    })

});

router.get('/apiFind/filter/:categoryItem', (req, res) => {
    console.log('apifindfilter=>',req.params.categoryItem)
    console.log('params form react call filter',req.params)
    ProductItem.find({categoryItem:req.params.categoryItem})
        .then(Product => {
            if(Product){
             res.send(Product);
            }else{
                res.send("error");
            }
        })
});

module.exports = router;