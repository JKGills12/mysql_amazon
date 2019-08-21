DROP database if exists bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INTEGER(200) NULL,
    PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("xbox one", "electronics", 599.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ps4", "electronics", 699.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gopro 7 black", "cameras", 399.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("canon eos r", "cameras", 1999.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("air jordans", "shoes", 299.98, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bose noise cancel headphones", "audio", 299.99, 74);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("avengers: endgame", "movies-music", 34.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laundry hamper", "storage", 36.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("clorox disinfecting wipes", "health & household", 13.77, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone x", "cell phones", 679.99, 12);

SELECT * FROM products;