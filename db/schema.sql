DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT auto_increment NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN default FALSE,
    PRIMARY KEY (id)
);