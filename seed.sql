DROP DATABASE IF EXISTS hw_base;
CREATE database hw_base;

USE hw_base;


CREATE TABLE employee(



id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INT ,
manager_id INT ,
PRIMARY KEY (id)

   
  
);

CREATE TABLE role (

PRIMARY KEY (id),
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL (5, 2),




);


CREATE TABLE department(




PRIMARY KEY (id),
name VARCHAR(30),
id INT NOT NULL AUTO_INCREMENT,
    
);
