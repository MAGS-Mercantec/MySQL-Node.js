/* Here is the explanation for the code above:
1. The first code creates a connection between the Node.js file and the MySQL database. 
The connection information is passed in the form of an object. 
The host property is set to localhost because the database and the Node.js file are running on the same machine. 
The user property is set to root because the default user in MySQL is root. 
The password property is set to the password you created when installing MySQL.
2. The second code creates a database called mydb. 
The IF NOT EXISTS keyword is added to prevent an error if the database already exists.
3. The third code creates a table called customers with two columns: name and address. 
The IF NOT EXISTS keyword is added to prevent an error if the table already exists.
4. The fourth code inserts a record in the customers table.
5. The fifth code selects all the records in the customers table and returns the result object.
6. The sixth code deletes the record where the address is Highway 37.
7. The seventh code selects all the records in the customers table and returns the result object.
8. The eighth code deletes the customers table. */ 

var mysql = require('mysql');
require('dotenv').config();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "REPLACE INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

con.connect(function(err) { 
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

con.connect(function(err) { 
    if (err) throw err;
    con.query("DELETE FROM customers WHERE address = 'Highway 37'", function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });

  con.connect(function(err) { 
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

con.connect(function(err) { 
    if (err) throw err;
    con.query("DROP TABLE customers", function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });