-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;
-- Uses this dabatase --
USE burgers_db;
-- Creates table and field --
CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(35),
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);
