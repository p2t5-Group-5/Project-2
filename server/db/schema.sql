-- Active: 1743554373537@@127.0.0.1@5432@project_2_db
-- DROP DATABASE
DROP DATABASE IF EXISTS project_2_db;
-- CREATE DATABASE
CREATE DATABASE project_2_db;

CREATE TYPE usertype AS ENUM ('admin', 'buyer', 'seller');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    usertype usertype NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category_id INT NOT NULL,
    seller_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    brand VARCHAR(50),
    size VARCHAR(50),
    color VARCHAR(50),
    year varchar(4),
    condition VARCHAR(50),
    FOREIGN KEY (seller_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
