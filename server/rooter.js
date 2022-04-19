const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const mysql = require('mysql2');
const app = express();

// Create the connection pool. The pool-specific settings are the defaults
const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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

//Lector de CRUD
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
app.get('/api/item/:id', (req,res) => {
  
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
    let sql = "UPDATE item SET Title = '2080' WHERE iditem = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
});

//Crear nuevo Item
app.post('/api/item', (req,res) => {
    console.log(req.body);
    let rowTitle = []
    let rowValues = []
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
