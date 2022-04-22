const express = require('express')
const app = express()
const mysql = require('mysql2')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');

// Create the connection pool. The pool-specific settings are the defaults
const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});
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
  
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM item", function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});


//Buscar ITEM por ID
app.get('/api/item/id/:id', (req,res) => {
  console.log(req.params)
    let item = req.params.id
    let sql = "SELECT * FROM item WHERE iditem = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});
app.get('/api/item/price/:price', (req,res) => {
  console.log(req.params)
    let item = req.params.price
    let sql = "SELECT * FROM item WHERE price = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});
app.get('/api/item/f2/:f2', (req,res) => {
  console.log(req.params)
    let item = req.params.f2
    let sql = "SELECT * FROM item WHERE f2 = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});
app.get('/api/item/category/:category', (req,res) => {
  console.log(req.params)
    let item = req.params.category
    let sql = "SELECT * FROM item WHERE category = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});
//Eliminar por ID
app.delete('/api/item/:id', (req,res) => {
  
    let item = req.params.id
    let sql = "DELETE FROM item WHERE iditem = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});

// */*/*/*/*/*/*/*/* UPDATE Item /*/*/*/*/*/*/*/*/*
app.put('/api/item/:id', (req,res) => {
  let item = req.params.id
  Object.keys(req.body).map(function(key, index) {
      con.connect(function(err) {
        if (err) throw err;
        // let sql = "UPDATE item SET Title = '2080' WHERE iditem = "+ mysql.escape(item);
        var sql =  `UPDATE item SET ${String(key)} = '${String(req.body[key])}' WHERE iditem = `+mysql.escape(item);
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
  });

});

//Crear nuevo Item
app.post('/api/item', upload.single('img'), (req,res) => {
    let rowTitle = []
    let rowValues = []
    if (req.file!==undefined) {
      rowTitle.push("img")
      rowValues.push(`'/images/${req.file.filename}'`)
    }
    Object.keys(req.body).map(function(key, index) {
        rowTitle.push(String(key))
        rowValues.push("'"+String(req.body[key])+"'")
    });
    con.connect(function(err) {
        if (err) throw err;
        var sql =  `INSERT INTO item (${rowTitle}) VALUES (${rowValues})`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
});
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+"list"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
