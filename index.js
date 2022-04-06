// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');

// TODO: Create an array of questions for user input
const questions = [
    {
        //title input
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        //make sure user inputs a title
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title!');
                return false;
            }
        }
    },
    {
        //desc input
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        //install input
        type: 'input',
        name: 'installation',
        message: 'Please enter how to install your program: (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter how to install!');
                return false;
            }
        }
    },
    {
        //usage input
        type: 'input',
        name: 'usage',
        message: 'What is your program used for?'
    },
    {
        //license input
        type: 'list',
        name: 'license',
        message: 'What license would you like to put this project under?',
        choices: ['MIT', 'Apache-2.0', 'ISC '],

    },
    {
        //credits input
        type: 'input',
        name: 'credits',
        message: "Please enter those you would like to credit, if any:"
    },
    {
        //test input
        type: 'input',
        name: 'tests',
        message: 'If you have any tests for your program, enter them here:'
    },
    {
        //email input
        type: 'input',
        name: 'email',
        message: 'Please enter your email: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        //github UN input
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username!',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
    //     if (err) throw err;
    //     console.log('README.md is written, my lord.');
    // })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readMe = generateMarkdown(answers);
            writeToFile("README.md", readMe);
        });
};

// Function call to initialize app
init();
