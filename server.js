// // Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

var inquirer = require('inquirer');
const Department = require("./lib/Department.js");
const Role = require("./lib/Role.js");
const Employee = require("./lib/Employee.js");

function main() {
    //Clear screen
    //console.log('\033[2J');

    inquirer
        .prompt([{
            type: 'list',
            name: 'function',
            message: 'Please select choice from menu',

            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'View Departments',
                'View Roles',
                'View Employees'
            ]
        }])
        .then(function (answer) {
            switch (answer.function) {
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'View Departments':
                    viewDepartment();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Employees':
                    viewEmployees();
                    break;
            }
        })
}

async function addDepartment() {
    const answer = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter department name:",
    }, ]);

    Department.create([
        "name"
    ], [
        answer.name
    ], function (result) {
        console.log('Department Created');
    });
    main();
}

async function addRole() {
    const answer = await inquirer.prompt([{
            name: "title",
            type: "input",
            message: "Please enter Role name:",
        },
        {
            name: "salary",
            type: "input",
            message: "Please enter Role salary:",
        },
        {
            name: "department_id",
            type: "input",
            message: "Please enter department ID: ",
        },
    ]);

    Role.create([
        "title, salary, department_id"
    ], [
        answer.title,
        answer.salary,
        answer.department_id
    ], function (result) {
        console.log('Role Created');
    });
    main();
}

async function addEmployee() {
    const answer = await inquirer.prompt([{
            name: "firstName",
            type: "input",
            message: "Please provide First Name:",
        },
        {
            name: "lastName",
            type: "input",
            message: "Please provide Last Name:",
        },
        {
            name: "role_id",
            type: "input",
            message: "Pleae provide Role ID:",
        },
        {
            name: "manager_id",
            type: "input",
            message: "Please provide Manager ID:",
        },
    ]);

    Employee.create([
        "first_name, last_name, role_id, manager_id"
    ], [
        answer.firstName,
        answer.lastName,
        answer.role_id,
        answer.manager_id
    ], function (result) {
        console.log('Employee Created');
    });
    main();
}

function viewDepartment() {
    Department.all(function (data) {
        var hbsObject = {
            Department: data
        };
        console.log(hbsObject);

    });
    main();
}

function viewRoles() {
    main();
}

function viewEmployees() {
    main();
}


main();