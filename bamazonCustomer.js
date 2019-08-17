var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = require('./keys'); //connections stored in keys.js



connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log("this is working");
});
