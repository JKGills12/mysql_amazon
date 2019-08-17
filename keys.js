// require('dotenv').config()
console.log(process.env.MYSQL_PASSWORD);

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.mysql_password,
    database: 'bamazon_db'
});