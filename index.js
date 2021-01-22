var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "hw_base",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createDept();
});

function createDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepart",
        message: "ADD department?",
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO department SET ?",
        { department: answer.addDepart },
        function (err, data) {
          if (err) throw err;
          console.table(data);

          createRole();
        }
      );
    });
}

function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what role?",
      },
      {
        type: "input",
        name: "salary",
        message: "what salary?",
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO role SET ?",
        { title: answer.title },
        function (err, data) {
          if (err) throw err;
          // console.table(data);
        }
      );
    })
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      console.log;
      connection.query(
        "INSERT INTO role SET ?",
        { salary: answer.salary },
        function (err, data) {
          if (err) throw err;
          // console.table(data);
        }
      );
      createEmployee();
    });
}

function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what last name?",
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee SET ?",
        { first_name: answer.first_name },
        function (err, data) {
          if (err) throw err;
          // console.table(data);
        }
      );
    });
}

connection.end();
