// var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = require('./keys'); //connections stored in keys.js


connection.connect(function (err) {
    if (err) {
        throw err;
    }

    // console.log('this is working');
    startShop();
});

// Start - run app to display all the available items - ids, names, and prices.
function startShop() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        // console.log(' ');


        // display results
        for (var i = 0; i < res.length; i++) {
            console.log('ID: ' + res[i].item_id + '|' + 'Product: ' + res[i].product_name + '|' + 'Department: ' + res[i].department_name + '|' + 'Price: ' + res[i].price + '|' + 'Available: ' + res[i].stock_quantity);
        }


    });

}

// Prompt two messages
// 1) What is the ID of the product the customer would like to buy.



// 2) How many units of the product would they like.



// Once the customer has placed the order, app should check to make sure the store has enough in stock.
// If not, app will display a msg of "INSUFFICIENT QUANTITY!", and prevent the order from going through.
// However, if there is sufficient quantity, the order will be fulfilled.
// The SQL DB will update to reflect the remaining quantity.
