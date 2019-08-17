var mysql = require('mysql');
require('dotenv').config(); //retrieve password for mysql 
// require('dotenv').config()
// console.log(process.env.MYSQL_PASSWORD);

module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'bamazon_db'
});