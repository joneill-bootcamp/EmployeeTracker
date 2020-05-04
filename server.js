// Bring in required modules
var inquirer = require('inquirer');

// Bring in Obejct definitions
const Department = require("./lib/Department.js");
const Role = require("./lib/Role.js");
const Employee = require("./lib/Employee.js");
const figlet = require("figlet");


async function displayTitle() {
    figlet("Employee Tracker", function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    });
}

// Set up main function
async function main() {
    displayTitle();

    // Get users choice
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
                'View Employees',
                'Quit'
            ]
        }])
        // Evaluate answers 
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
                case 'Quit':
                    console.log('Have a nice day!');
                    process.exit(0); //exit status '0' indicates normal exit
            }
        })
}

// Functions
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
            type: "number",
            message: "Please enter Role salary:",
        },
        // I tried to get a sub list going here, but simply wasn't able to get it going, will come back and update 
        {
            name: "department_id",
            type: "number",
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
    setTimeout(function () {
        main();
    }, 1000);
}

async function addEmployee() {

    var manager = null;

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
        // I tried to get a sub list going here, but simply wasn't able to get it going, will come back and update 

        {
            name: "role_id",
            type: "number",
            message: "Pleae provide Role ID:",
        },
        {
            name: "manager_id",
            type: "number",
            message: "Please provide Manager ID:",
        },
    ]);

    // Deal with A blank Manager ID, workaround for not having sublists working
    if (!answer.manager_id) {
        manager_id = null;
    }

    Employee.create([
        "first_name, last_name, role_id, manager_id"
    ], [
        answer.firstName,
        answer.lastName,
        answer.role_id,
        manager_id
    ], function (result) {
        console.log('Employee Created');
    });
    setTimeout(function () {
        main();
    }, 1000);
}

// I tried using console.table, but the JSON that comes back here is not compatible wiht it, will revise and update when i've worked it out

function viewDepartment() {
    Department.all(function (data) {
        var hbsObject = {
            Department: data
        };
        //console.log('\033[2J');
        console.log(hbsObject);

    });
    main();
}

function viewRoles() {
    Role.all(function (data) {
        var hbsObject = {
            Role: data
        };
        //console.log('\033[2J');
        console.log(hbsObject);

    });
    main();
}

function viewEmployees() {
    Employee.all(function (data) {
        var hbsObject = {
            Employee: data
        };
        //console.log('\033[2J');
        console.log(hbsObject);
    });
    main();
}

//Execute main menu
main();