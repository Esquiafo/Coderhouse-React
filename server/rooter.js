const express = require('express')
const app = express()
const mysql = require('mysql2')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
//Middlewares
const {apiDeleteById,apiGet,apiGetByCategory,apiGetById,apiGetByPrice,apiPost,apiPutById} = require('./middlewares/api/product/ApiControllerProduct');

//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, './public/images/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
});
//use express static folder
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



//Buscar TODOS los ITEM
app.get('/api/item', (req,res) => {
  apiGet(req,res)
});


//Buscar ITEM por ID
app.get('/api/item/id/:id', (req,res) => {
 apiGetById(req,res)
});
app.get('/api/item/price/:price', (req,res) => {
  apiGetByPrice(req,res)
});
app.get('/api/item/category/:category', (req,res) => {
  apiGetByCategory(req,res)
});
//Eliminar por ID
app.delete('/api/item/:id', (req,res) => {
  apiDeleteById(req,res)
});

// */*/*/*/*/*/*/*/* UPDATE Item /*/*/*/*/*/*/*/*/*
app.put('/api/item/:id',upload.single('img'), (req,res) => {
  apiPutById(req,res)
});

//Crear nuevo Item
app.post('/api/item', upload.single('img'), (req,res) => {
    apiPost(req,res)
});
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+"ERRORE"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
