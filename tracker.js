const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "workdb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  askQuestions();
});

function askQuestions() {
  inquirer
    .prompt({
      message: "what would you like to do?",
      type: "list",
      choices: [
        "view all employees",
        "view all departments",
        "add employee",
        "add department",
        "add role",
        "update employee role",
        "QUIT",
      ],
      name: "choice",
    })
    .then((answers) => {
      console.log(answers.choice);
      switch (answers.choice) {
        case "view all employees":
          viewEmployees();
          break;

        case "view all departments":
          viewDepartments();
          break;

        case "add employee":
          addEmployee();
          break;

        case "add department":
          addDepartment();
          break;

        case "add role":
          addRole();
          break;

        case "update employee role":
          updateEmployeeRole();
          break;

        default:
          connection.end();
          break;
      }
    });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    askQuestions();
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    askQuestions();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter employee first name",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter employee last name",
      },
      {
        type: "input",
        name: "roleId",
        message: "Enter employee role ID",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter employee manager ID",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.firstName, res.lastName, res.roleId, res.managerId],
        function (err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          askQuestions();
        }
      );
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Enter new department name",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [res.department],
        function (err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          askQuestions();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        message: "Enter title:",
        type: "input",
        name: "title",
      },
      {
        message: "Enter salary:",
        type: "number",
        name: "salary",
      },
      {
        message: "Enter department ID:",
        type: "number",
        name: "department_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "INSERT INTO roles (title, salary, department_id) values (?, ?, ?)",
        [response.title, response.salary, response.department_id],
        function (err, data) {
          console.table(data);
        }
      );
      askQuestions();
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        message:
          "which employee would you like to update? (search by first name)",
        type: "input",
        name: "name",
      },
      {
        message: "enter the new role ID:",
        type: "number",
        name: "role_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ?",
        [response.role_id, response.name],
        function (err, data) {
          console.table(data);
        }
      );
      askQuestions();
    });
}
