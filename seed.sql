DROP DATABASE IF EXISTS hw_base;
CREATE database hw_base;

USE hw_base;
CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
    
);


CREATE TABLE role (


id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL (10, 2),
department INT NOT NULL REFERENCES  department(id) DEFAULT 0,
PRIMARY KEY (id)


);



CREATE TABLE employee(



id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30),
last_name VARCHAR (30),
manager_id INT ,
role_id INT NOT NULL REFERENCES role(id),
PRIMARY KEY (id)
  
);



