// TODO: Include packages needed for this application
const fs = require('fs');
const path = require ('path');
const inquirer = require('inquirer');
const generateMarkdown = require ('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description1',
        message: 'What is the app for?'
    },
    {
        type: 'input',
        name: 'description2',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'description3',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'description4',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'description5',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'description6',
        message: 'What makes your project stand out?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your prject have?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command installs dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command runs tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of  of your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any contributors, third-party assets or tutorials used for this project.'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => { 
        writeToFile('readme.md', generateMarkdown({ ...inquirerResponses}));
    });
}

// Function call to initialize app
init();
