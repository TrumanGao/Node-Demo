//导入msq包
var mysql      = require('mysql');
connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'news'
});
 
connection.connect();
module.exports = connection;