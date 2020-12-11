const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions");
const { manager } = require("./lib/questions");
//const { create } = require("./lib/questions");


const employees = [];
function start(){
    inquirer.prompt(questions.mainMenu)
    .then(function(data){
        switch(data.employeeRole){
            case "Engineer":
                createEngineer(data);
            break;
            case"Intern":
            createIntern(data);
            break;
            case "Manager":
                createManager(data);
            
        }
    })
}

start();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createManager(data) {
    console.log(data)
    
    inquirer
        .prompt(questions.manager)
        .then(function(managerObj){
           
            let newManager = new Manager(data.name, data.id, data.email, managerObj.officeNumber);
            employees.push(newManager);
            console.log("A new manager has been added to the team!", newManager);
            if(!managerObj.newEmployee){
                //write you html
                console.log("done");
                console.log(render(employees));
                //write to file

            }
            else{
                //add more to your team
                start();
            }
})
};
function createEngineer(data) {
    inquirer
        .prompt(questions.engineer)
        .then(function(engineerObj) {
            let newEngineer = new Engineer(data.name, data.id, data.email, engineerObj.engineerGithub);
            employees.push(newEngineer);
            console.log("A new engineer has been added to your team!", newEngineer);
            if (!engineerObj.newEmployee) {
                console.log("done");
            }
            else {
                start();
            }
            
        })
};

function createIntern(data) {
    inquirer
        .prompt(questions.intern)
        .then(function(internObj) {
            let newIntern = new Intern(data.name, data.id, data.email, internObj.internSchool);
            employees.push(newIntern);
            console.log("A new engineer has been added to your team!", newIntern);
            if (!internObj.newEmployee) {
                console.log(done);
            }
            else {
                start();
            }
        })
}
//createManager();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.S

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
