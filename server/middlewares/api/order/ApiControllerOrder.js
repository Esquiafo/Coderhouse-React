
const mysql = require('mysql2');
var fs = require('fs');
const md5 = require('md5')
const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});

module.exports = { 
  orderGet(req,res) {
      
      con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM purchase", function (err, result, fields) {
            if (err) throw err;
            res.json(result); 
          });
        });
  },
  orderGetById(req,res){
    let order = req.params.id

    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM purchase WHERE idorder = "${order}"`, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  orderGetByEmail(req,res){
    let order = req.params.email
    let sql = "SELECT * FROM purchase WHERE email = "+ mysql.escape(order);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
orderGetByUser(req,res){
    let order = req.params.user
    let sql = "SELECT * FROM purchase WHERE user = "+ mysql.escape(order);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
orderGetByTelefono(req,res) {
    let order = req.params.telefono
    let sql = "SELECT * FROM purchase WHERE phone = "+ mysql.escape(order);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
orderDeleteById(req,res){
    let order = req.params.id
    let sql = "DELETE FROM purchase WHERE idorder = "+ mysql.escape(order);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  
orderPutById(req,res) {
    
    let order = parseInt(req.params.id)
    let newChanges = []

    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
    });
    con.connect(function(err) {
      var sql
        if (err) throw err;
      
        sql = `UPDATE purchase SET ${newChanges} WHERE (idorder = ` + mysql.escape(order)+")";
      
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      });
  
  },
  orderPutByEmail(req,res) {
    
    let order = parseInt(req.params.email)
    let newChanges = []

    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
    });
    con.connect(function(err) {
      var sql
        if (err) throw err;
      
        sql = `UPDATE purchase SET ${newChanges} WHERE (email = ` + mysql.escape(order)+")";
      
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      });
  
  },
  orderPost(req,res) {
    
    let newColumn = []
    let newValues = []

    Object.keys(req.body).map(function(key, index) {

        newColumn.push(`${String(key)}`)
        newValues.push(`'${String(req.body[key])}'`)
    })
    con.connect(function(err) {
      var sql
        if (err) throw err;
        var sql =  `INSERT INTO purchase (${newColumn}) VALUES (${newValues})`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      })
  
  
  },
}