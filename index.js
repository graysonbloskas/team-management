const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlTeam = require("./src/htmlTeam")
const team = [];

// function that starts the app
menu = () => {
// Initial prompt asking them to add members to their team
    inquirer.prompt(
        {
            type: "list",
            name: "select",
            message: "Do you want to add an employee to your team?",
            choices: ["Manager", "Engineer", "Intern", "Create Team"]

// Switch function to tell the app what prompts to show the user
    }).then((choice) => {
        switch (choice.select) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Create Team":
                generateTeam();
                break;
        };
    });

    // Prompt to create new manager
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the name of the Manager",
                validate: data => {
                    if (data !== "") {
                        return true;
                    };
                    return "Names must contain valid letters"
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of the Manager?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid id"}
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of the Manager?",
                validate: function (email) {
  
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } else {
                        console.log("You must enter a valid email address")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team's office number?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid Office Number"}
            },

        ]).then(({
            name,
            id,
            email,
            officeNumber

        // Push new manager into the empty team array
        }) => {
            const employee = new Manager(name, id, email, "Manager", officeNumber);
            team.push(employee);
            menu();
        });
        
    }

// Generates the createEngineer prompts
    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Engineer?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid name"}
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your Engineer?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid id"}
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of your Engineer?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "You must enter a valid email address"
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the github username of your Engineer?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid github username"}
            },
        ]).then(({
            name,
            id,
            email,
            github

        // Pushes new Engineer into the empty team array
        }) => {
            const employee = new Engineer(name, id, email, "Engineer", github);
            team.push(employee);
            menu();
        });
    }

// generates the createIntern prompts
    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Intern?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid name"}
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your intern?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid id"}
            },
            {
                type: "input",
                name: "email",
                message: "What is your Intern's email address?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "You must enter a valid email address"
                }
            },
            {
                type: "input",
                name: "school",
                message: "What school does your Intern attend?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid School Name"}
            },
        ]).then(({
            name,
            id,
            email,
            school

        // Pushes new Intern into the empty team array
        }) => {
            const employee = new Intern(name, id, email, "Intern", school);
            team.push(employee);
            menu();
        });
    }
}
// Function to generate the team. This is called on line 33 when the user selects "Create Team" from the start menu.
generateTeam = () => {
    const html = htmlTeam(team);
    fs.writeFileSync('./dist/team.html', html);
    console.log("Congrats, your team has been created.")
}

menu()