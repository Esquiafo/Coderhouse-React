const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
//Middlewares product
const {
itemDeleteById,
itemGet,
itemGetByCategory,
itemGetById,
itemGetByPrice,
itemPost,
itemPutById,
itemRemoveImg} = require('./middlewares/api/product/ApiControllerProduct');
//Middlewares user
const {
  userDeleteById,
  userDeleteByEmail,
  userGet,
  userGetByDocumento,
  userGetById,
  userGetByEmail,
  userGetByTelefono,
  userPost,
  userPutById,
  userPutByEmail} = require('./middlewares/api/user/ApiControllerUser');
//Middlewares order
const {
  orderDeleteById,
  orderDeleteByEmail,
  orderGet,
  orderGetByDocumento,
  orderGetById,
  orderGetByEmail,
  orderGetByTelefono,
  orderPost,
  orderPutById,
  orderPutByEmail} = require('./middlewares/api/order/ApiControllerUser');

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

//************COMEINAZO PATH PARA ITEM************//
//Search TODOS los ITEM
app.get('/api/item', (req,res) => {
itemGet(req,res)
});
//Search ITEM por FILA
app.get('/api/item/id/:id', (req,res) => {
itemGetById(req,res)
});
app.get('/api/item/price/:price', (req,res) => {
itemGetByPrice(req,res)
});
app.get('/api/item/category/:category', (req,res) => {
itemGetByCategory(req,res)
});
//Delete by ID
app.delete('/api/item/:id', (req,res) => {
itemRemoveImg(req,res)
itemDeleteById(req,res)
});
//Update
app.put('/api/item/:id',upload.single('img'), (req,res) => {
  if (req.file!==undefined) {
  itemRemoveImg(req,res)
  itemPutById(req,res)
  }else{
  itemPutById(req,res)
  }
});

//Create Item
app.post('/api/item', upload.single('img'), (req,res) => {
itemPost(req,res)
});
//************FIN PATH PARA ITEM************//

//************COMIENZO PATH PARA USUSARIOS************//
//Search TODOS los User
app.get('/api/user', (req,res) => {
  userGet(req,res)
});
//Search User por FILA
app.get('/api/user/id/:id', (req,res) => {
  userGetById(req,res)
});
app.get('/api/user/telefono/:telefono', (req,res) => {
  userGetByTelefono(req,res)
});
app.get('/api/user/documento/:documento', (req,res) => {
  userGetByDocumento(req,res)
});
app.get('/api/user/correo/:correo', (req,res) => {
  userGetByEmail(req,res)
});
//Delete by ID
app.delete('/api/user/email/:email', (req,res) => {
  userDeleteByEmail(req,res)
});
//Delete by ID
app.delete('/api/user/id/:id', (req,res) => {
  userDeleteById(req,res)
});
//Update by ID
app.put('/api/user/email/:id', (req,res) => {
    userPutById(req,res)
});
//Update by Email
app.put('/api/user/id/:id', (req,res) => {
  userPutByEmail(req,res)
});

//Create User
app.post('/api/user', (req,res) => {
   userPost(req,res)
});

//************COMIENZO PATH PARA ORDERS************//
//Search TODOS los User
app.get('/api/order', (req,res) => {
  orderGet(req,res)
});
//Search User por FILA
app.get('/api/order/id/:id', (req,res) => {
  orderGetById(req,res)
});
app.get('/api/order/telefono/:telefono', (req,res) => {
  orderGetByTelefono(req,res)
});
app.get('/api/order/documento/:documento', (req,res) => {
  orderGetByDocumento(req,res)
});
app.get('/api/order/correo/:correo', (req,res) => {
  orderGetByEmail(req,res)
});
//Delete by ID
app.delete('/api/order/email/:email', (req,res) => {
  orderDeleteById(req,res)
});
//Delete by ID
app.delete('/api/order/id/:id', (req,res) => {
  orderDeleteById(req,res)
});
//Update
app.put('/api/order/email/:id', (req,res) => {
    orderPutById(req,res)
});
//Update
app.put('/api/order/id/:id', (req,res) => {
  orderPutByEmail(req,res)
});

//Create User
app.post('/api/order', (req,res) => {
   orderPost(req,res)
});

//************FIN PATH PARA USUSARIOS************//
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+"ERRORE"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
