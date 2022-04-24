
const mysql = require('mysql2');
var fs = require('fs');
const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});


module.exports = { 
  itemGet(req,res) {
      
      con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM item", function (err, result, fields) {
            if (err) throw err;
            res.json(result); 
          });
        });
  },
  itemGetById(req,res){
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
  itemGetByPrice(req,res){
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
  itemGetByCategory(req,res) {
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
  itemDeleteById(req,res){
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
  
  itemPutById(req,res) {
    
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
          res.json(result); 
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
        sql = `UPDATE item SET img = '/images/${req.file.filename}', ${newChanges} WHERE (iditem = ` + mysql.escape(item)+")";
       }else{
        
        sql = `UPDATE item SET img = '/images/${req.file.filename}' WHERE (iditem = ` + mysql.escape(item)+")";
       }
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      });
  }
  },
  itemPost(req,res) {
    
    let item = parseInt(req.params.id)
    let newColumn = []
    let newValues = []
  if (req.file==undefined) {
  
    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newColumn.push(`${String(key)}`)
        newValues.push(`'${String(req.body[key])}'`)
      }
      
    });
    con.connect(function(err) {
        if (err) throw err;
        var sql =  `INSERT INTO item (${newColumn}) VALUES (${newValues})`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          res.json(result); 
        });
      });
  }else{
    Object.keys(req.body).map(function(key, index) {

        newColumn.push(`${String(key)}`)
        newValues.push(`'${String(req.body[key])}'`)
    })
    con.connect(function(err) {
      var sql
        if (err) throw err;
        var sql =  `INSERT INTO item (img,${newColumn}) VALUES ('${req.file.filename}',${newValues})`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      })
  }
  
  },
  itemRemoveImg(req,res){
    let item = parseInt(req.params.id)

    con.connect(function(err) {
      if (err) throw err;
      let sql = "SELECT img FROM item WHERE iditem = "+ mysql.escape(item);
      con.query(sql, function (err, result) {
        if (err) throw err;
        let path =  result[0].img;
        path == undefined || path=='-' 
        ?
        console.log("No hay imagen")
        :  
        fs.unlink(`./public/${path}`, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File deleted!');
      });

        

      });

    });

  }
}
