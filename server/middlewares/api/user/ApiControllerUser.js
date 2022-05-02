
const mysql = require('mysql2');
var fs = require('fs');
const con =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: "mydb"
});


module.exports = { 
  userGet(req,res) {
      
      con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM user", function (err, result, fields) {
            if (err) throw err;
            res.json(result); 
          });
        });
  },
  userGetById(req,res){
    let user = req.params.id
    let sql = "SELECT * FROM user WHERE iduser = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  userGetByEmail(req,res){
    let user = req.params.id
    let sql = "SELECT * FROM user WHERE iduser = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
userGetByDocumento(req,res){
    let user = req.params.documento
    let sql = "SELECT * FROM user WHERE documento = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
userGetByTelefono(req,res) {
    let user = req.params.telefono
    let sql = "SELECT * FROM user WHERE telefono = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
userDeleteById(req,res){
    let user = req.params.id
    let sql = "DELETE FROM user WHERE iduser = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  userDeleteByEmail(req,res){
    let user = req.params.email
    let sql = "DELETE FROM user WHERE email = "+ mysql.escape(user);
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.json(result); 
        });
      });
  },
  
userPutById(req,res) {
    
    let user = parseInt(req.params.id)
    let newChanges = []

    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
    });
    con.connect(function(err) {
      var sql
        if (err) throw err;
      
        sql = `UPDATE user SET ${newChanges} WHERE (iduser = ` + mysql.escape(user)+")";
      
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      });
  
  },
  userPutByEmail(req,res) {
    
    let user = parseInt(req.params.email)
    let newChanges = []

    Object.keys(req.body).map(function(key, index) {
      if (req.body[key]!=='undefined') {
        newChanges.push(`${String(key)} = '${String(req.body[key])}'`)
      }
    });
    con.connect(function(err) {
      var sql
        if (err) throw err;
      
        sql = `UPDATE user SET ${newChanges} WHERE (email = ` + mysql.escape(user)+")";
      
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      });
  
  },
  userPost(req,res) {
    console.log('aca')
    let newColumn = []
    let newValues = []
    Object.keys(req.body).map(function(key, index) {
        newColumn.push(`${String(key)}`)
        newValues.push(`'${String(req.body[key])}'`)
    })
    con.connect(function(err) {
      var sql
        if (err) throw err;
        var sql =  `INSERT INTO user (${newColumn}) VALUES (${newValues})`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          return res.json(result); 
        });
      })
  
  
  },
// userRemoveImg(req,res){
//     let user = parseInt(req.params.id)

//     con.connect(function(err) {
//       if (err) throw err;
//       let sql = "SELECT img FROM user WHERE iduser = "+ mysql.escape(user);
//       con.query(sql, function (err, result) {
//         if (err) throw err;
//         let path =  result[0].img;
//         path == undefined || path=='-' 
//         ?
//         console.log("No hay imagen")
//         :  
//         fs.unlink(`./public/${path}`, function (err) {
//           if (err) throw err;
//           // if no error, file has been deleted successfully
//           console.log('File deleted!');
//       });

        

//       });

//     });

//   }
}