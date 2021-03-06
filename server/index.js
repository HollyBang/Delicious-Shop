const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const router = express.Router();

const fs = require('fs');

const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose');

// LOAD USER MODEL
require('./models/Admin');
// LOAD Product_item  MODEL
require('./models/Product_Item');



const keys = require('./config/keys');

// LOAD ROUTES
const index = require('./routes/index');
const admin = require('./routes/admin');


const PORT = process.env.PORT || 5000;


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
app.use(cookieParser());



/* Initialize multer middleware with the multer-storage-cloudinary based
   storage engine */

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
// Answer API requests.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json


// Handlebars middleware
// BEWARE! STRANGE CONFIG =)
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));
app.use('/admin', express.static(path.resolve(__dirname, 'serverAssets')));



//routest
app.use('/', index);
app.use('/admin', admin);

// MUST BE IN THE BOTTOM!
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
// }