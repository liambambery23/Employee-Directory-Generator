const mgrQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page consisting of a manager and any number of engineers and interns. First, what is your manager's name?",
        name: 'mgrName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter your ID:',
        name: 'mgrId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'mgrEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
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
    }
];

const employeeCreate = [
    {
        type: 'confirm',
        message: 'Would you like to add another member to your team?',
        name: 'newEmployee'
    },
    {
        type: 'list',
        message: 'Which kind of employee would you like to add?',
        choices: ['Engineer', 'Intern'],
        name: 'employeeRole'
    }
];

const engineerInfo = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'engineerName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
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
    }
];

const internInfo = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's ID?",
        name: 'internId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of the school your intern attends?",
        name: 'interSchool',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: mgrQuestions,
    create: employeeCreate,
    engineer: engineerInfo,
    intern: internInfo,
}

