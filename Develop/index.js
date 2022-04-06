// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

//create function that prompts user for information on README, call this data for later
//need ques for title, description, table of contents, 
//installation, usage, license, credits, tests, and questions
const promptUser = () => {
    return inquirer
        .prompt([
            {
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
            }
        ])
        .then(questionData => {
            //push question data into array
            questions.push(questionData);
            //console log to check if input collected
            console.log(questions);
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
promptUser();
