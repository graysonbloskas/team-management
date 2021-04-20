const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// function that starts the app
menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the name of the Manager",
                //validation
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of the Manager?",
                // validation
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of the Manager?",
                //validation
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team's office number?",
                // Validation
            },

        ]).then(({
            name,
            id,
            email,
            officeNumber
        }) => {
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager)
        });
    }

    createManager();

    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Engineer?",
                //validation
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your Engineer?",
                //validation
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of your Engineer?",
                //validation
            },
            {
                type: "input",
                name: "github",
                message: "What is the github username of your Engineer?",
                //validation
            },
        ]).then(({
            name,
            id,
            email,
            github
        }) => {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
        });
    }
    createEngineer();

    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Intern?",
                //validation
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your intern?",
                //validation
            },
            {
                type: "input",
                name: "email",
                message: "What is your Intern's email address?",
                //validation
            },
            {
                type: "input",
                name: "school",
                message: "What school does your Intern attend?",
                //validation
            },
        ]).then(({
            name,
            id,
            email,
            school
        }) => {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
        });
    }
}



menu()