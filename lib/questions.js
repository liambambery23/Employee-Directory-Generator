const mainMenu =[
    {
        type: 'input',
        message: 'What is your Name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id'
    },
    {
        type: 'list',
        message: 'Which kind of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Manager'],
        name: 'employeeRole'
    }
    
]

const mgrQuestions = [
    {
        type: 'input',
        message: 'Please enter an office number:',
        name: 'officeNumber',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add another member to your team?',
        name: 'newEmployee'
    }
  
];

const engineerInfo = [
    {
        type: 'input',
        message: "What is the engineer's Github username",
        name: 'engineerGithub',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Github username is required.");
            }
            return true;
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add another member to your team?',
        name: 'newEmployee'
    }
];

const internInfo = [
    {
        type: 'input',
        message: "What is the name of the school your intern attends?",
        name: 'internSchool',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add another member to your team?',
        name: 'newEmployee'
    }
];

module.exports = {
    manager: mgrQuestions,
    engineer: engineerInfo,
    intern: internInfo,
    mainMenu:mainMenu
}

