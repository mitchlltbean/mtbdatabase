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

function start() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "Would you like Create",
      choices: ["Create Department", "Create Role", "Create Employee", "Exit"],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.start === "Create Department") {
        createDept();
      } else if (answer.start === "Create Role") {
        createRole();
      } else if (answer.start === "Create Employee") {
        createEmployee();
      } else answer.start === "Exit";
      connection.end();
    });
}
start();

function createDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "ADD department?",
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO department SET ?",
        { name: answer.department },
        function (err, data) {
          if (err) throw err;
          console.table(data);
          start();
        }
      );
    });
}

function createRole() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "what role?",
        },
        {
          type: "number",
          name: "salary",
          message: "what salary?",
        },
        {
          type: "list",
          name: "list",
          message: "Select department",
          choices: data.map((department) => ({
            name: department.name,
            value: department.id,
          })),
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department: answer.list,
          },
          function (err, data) {
            if (err) throw err;
            console.table(data);
            start();
          }
        );
      });
  });
}
//TODO: get list of roles
//TODO: Format list to have name value pairs
//TODO: Update Insert to refer to selected role

function createEmployee() {
  connection.query("SELECT * FROM role", function (err, data) {
    if (err) throw err;
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
        {
          type: "list",
          name: "list",
          message: "Select department",
          choices: data.map((role) => ({
            value: role.id,
          })),
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.list,
          },
          function (err, data) {
            if (err) throw err;
            console.table(data);
            start();
          }
        );
      });
  });
}
// connection.end()
