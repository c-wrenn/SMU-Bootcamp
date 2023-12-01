DROP DATABASE IF EXISTS classlist_db;
CREATE DATABASE classlist_db;

USE classlist_db;

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, --This id is the primary key, itll be easy to look up a student by id--
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  enrolled BOOLEAN NOT NULL
);
