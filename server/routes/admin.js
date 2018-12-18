const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const ProductItem = mongoose.model('productItem');
const cookieParser = require('cookie-parser');

const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'deliciousshop64',
    api_key: '668657522175832',
    api_secret: '8vn0lRyG9IHPsNqBz6_6dWzHQdY'
});

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: '', // cloudinary folder where you want to store images, empty is root
    allowedFormats: ['jpg', 'png'],
});

var parser = multer({ storage: storage });
router.get('/', function(req, res) {
    res.render('login');
});
router.post('/login', (req, res) => {
    if (req.body.email == "admin@lox.net" && req.body.password == "777") {
        let options = {
            maxAge: 1000 * 60 * 15, // would expire after 15 minutes
            httpOnly: true, // The cookie only accessible by the web server
        }
        res.cookie(req.body.email, req.body.password, options)
        res.redirect('/admin/addItem');
    } else {
        res.redirect('/');
    }
});
router.get('/addItem', (req, res) => {
    if (Object.keys(req.cookies)[0] === "admin@lox.net" && Object.values(req.cookies)[0] === "777") {
        res.render('addItem')
    } else {
        res.redirect('/');
    }
});
router.post('/addItem/add', parser.single('selectedFile'), function(req, res) {
    console.log('req_body====>',req.body);
    console.log('req_file==>',req.file);
    console.log('-----------categoryyyyy=========',req.body.category)
    console.log('-----------title=========',req.body.title)
    var ProductItemBody = {
        title:req.body.title,
        description: req.body.description,
        categoryItem:req.body.categoryItem,
        subcategoryItem:req.body.subcategoryItem,
        status:req.body.status,
        price:req.body.price,
        img:req.file.url,
        location:req.body.select
    }
    console.log('created object====>',ProductItemBody)
    new ProductItem(ProductItemBody)
        .save()
        .then(admin => {
            console.log("admin product is added, my Emprah!")
        })
});


// router.post('/addItem/add', parser.single('selectedFile'), function (req, res){
//     console.log(req.body)
//     console.log(req.file)
// });
// TEST ROUT
// router.get('/admin/add', function (req, res) {
//     let AdminBody = {
//         email: "admin@lox.net",
//         password: '777'
//     }
//     new Admin(AdminBody)
//         .save()
//         .then(admin => {
//             console.log("admin product is added, my Emprah!")
//         })
// });
// TEST ROUT
module.exports = router;