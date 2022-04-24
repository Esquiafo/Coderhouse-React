
const mysql = require('mysql2');


const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});


module.exports = { 
   apiGet(req,res) {
      
      con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM item", function (err, result, fields) {
            if (err) throw err;
            res.json(result); 
          });
        });
  },
  apiGetById(req,res){
    let item = req.params.id
    let sql = "SELECT * FROM item WHERE iditem = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  apiGetByPrice(req,res){
    let item = req.params.price
    let sql = "SELECT * FROM item WHERE price = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
 apiGetByCategory(req,res) {
    let item = req.params.category
    let sql = "SELECT * FROM item WHERE category = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
   apiDeleteById(req,res){
    let item = req.params.id
    let sql = "DELETE FROM item WHERE iditem = "+ mysql.escape(item);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  
   apiPutById(req,res) {
    
    let item = parseInt(req.params.id)
    let newChanges = []
  if (req.file==undefined) {
  
    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
      
    });
    con.connect(function(err) {
        if (err) throw err;
        var sql =  `UPDATE item SET ${newChanges} WHERE (iditem = ` + mysql.escape(item)+")";
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) throw err;
        });
      });
  }else{
    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
    });
    con.connect(function(err) {
      var sql
        if (err) throw err;
       if (newChanges!==undefined) {
        sql = `UPDATE item SET img = '/images/${req.file.filename}' WHERE (iditem = ` + mysql.escape(item)+")";
       }else{
        sql = `UPDATE item SET img = '/images/${req.file.filename}', ${newChanges} WHERE (iditem = ` + mysql.escape(item)+")";
       }
        con.query(sql, function (err, result) {
          if (err) throw err;
        });
      });
  }
  },
   apiPost(req,res) {
    let rowTitle = []
    let rowValues = []
    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!==undefined) {
        rowTitle.push(String(key))
        rowValues.push("'"+String(req.body[key])+"'")
      }
        
    });
    console.log(rowTitle)
    console.log(rowValues)
    con.connect(function(err) {
        if (err) throw err;
        var sql =  `INSERT INTO item (img, ${rowTitle}) VALUES ('/images/${req.file.filename}',${rowValues})`;
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
  },
}