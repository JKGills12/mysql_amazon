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
        console.log(' ');
        console.log('=====================*BAMAZON*===================');
        console.log(' ');
        console.log('----------------------PRODUCTS-------------------');

        // display results
        for (var i = 0; i < res.length; i++) {
            console.log('ID: ' + res[i].item_id + '|' + 'Product: ' + res[i].product_name + '|' + 'Department: ' + res[i].department_name + '|' + 'Price: ' + res[i].price + '|' + 'Available: ' + res[i].stock_quantity);
        }
        buyShop();


    });

}

// Prompt two messages
// 1) What is the ID of the product the customer would like to buy.
function buyShop() {
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'What is the [ID] of the product you would like to buy?',
            // check to make sure ID is valid
            validate: function(value) {
                if(isNaN(value) === false){
                    return true;
                }
                else {
                    return false;
                }
            }
        },
// 2) How many units of the product would they like
        {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to buy?',
            validate: function (value) {
                if (isNaN(value) === false){
                    return true;
                }
                else {
                    return false;
                }
            }
// Once the customer has placed the order, app should check to make sure the store has enough in stock.
// If not, app will display a msg like "INSUFFICIENT QUANTITY!", and prevent the order from going through.
// However, if there is sufficient quantity, the order will be fulfilled.
// The SQL DB will then update to reflect the remaining quantity.
        }

    ])
    .then(function(answer) {
        var chosenItem = answer.id;
        var quantity = answer.quantity;
        completeBuy(chosenItem, quantity);
    });
}

function completeBuy(chosenItem, quantity) {
    connection.query('SELECT * FROM products WHERE item_id= ' + chosenItem, function(err, res) {
        // console.log(res);
        // console.log(quantity);
        // if(err) throw err;

        if (quantity <= res[0].stock_quantity) {
            console.log('Thank You For Your Order of: ' + res[0].product_name);
        console.log('Your Total is: ' + '$' + res[0].price * quantity);

        connection.query('UPDATE products SET stock_quantity = stock_quantity = stock_quantity - ' + quantity + ' WHERE item_id = ' + chosenItem);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        }
        else {
        console.log('Sorry, we only have ' + res[0].stock_quantity + ' in stock');
        }
        buyAgain();
    });
};

function buyAgain(){
    inquirer.prompt([
            {
                type: 'confirm',
                name: 'rebuy',
                message: 'Would you like to make another purchase?'
            }
        ])
        .then(function (answer) {
            if (answer.rebuy) {
                startShop();
            }
            else {
                console.log('Thanks for shopping, COME BACK SOON!');
            }
        });
}