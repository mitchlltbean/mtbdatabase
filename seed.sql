DROP DATABASE IF EXISTS hw_base;
CREATE database hw_base;

USE hw_base;


CREATE TABLE  (

--   * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT ,
manager_id INT,
PRIMARY KEY (id)

   
  
);

CREATE TABLE role (

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

PRIMARY KEY (id)
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30)
salary DECIMAL (5)




);


CREATE TABLE department (


--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

PRIMARY KEY (id)
name VARCHAR(30)
id INT NOT NULL AUTO_INCREMENT,
    
);

