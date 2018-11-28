const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const fs = require('fs');

const mongoose = require('mongoose');

// LOAD USER MODEL
require('./models/Product_Item');

const keys = require('./config/keys');

const index = require('./routes/index');


const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: 'deliciousshop64',
  api_key: '668657522175832',
  api_secret: '8vn0lRyG9IHPsNqBz6_6dWzHQdY'
});
// Multi-process to utilize all CPU cores.
// if (cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });

// } else {

mongoose.Promise = global.Promise;
// mongoose connect
mongoose.connect(keys.mongoURI)
  .then(() =>
    console.log('mongoDb is connected'))
  .catch(err => console.log(err))

const app = express();

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '', // cloudinary folder where you want to store images, empty is root
  allowedFormats: ['jpg', 'png'],
});

/* Initialize multer middleware with the multer-storage-cloudinary based
   storage engine */
var parser = multer({ storage: storage });
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
// Answer API requests.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json

app.post('/image/upload', parser.single('selectedFile'), function (req, res) {
  console.log(req.file);
  res.json(req.file);
});

//routest
app.use('/', index);


// MUST BE IN THE BOTTOM!
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
// }