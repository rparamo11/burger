-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;
-- Uses this dabatase --
USE burgers_db;
-- Creates table and field --
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
