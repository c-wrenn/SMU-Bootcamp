DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE courses_db;

USE courses_db;

CREATE TABLE course_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INT,
  total_enrolled INT
)
