const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/readme-template');
// Prompt Users Questions
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation (Required)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage (Required)',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Credit (Required)',
        },
        {
            type: 'input',
            name: 'License',
            message: 'Licenses (Required)',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution (Required)',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test (Required)',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a email address!');
                    return false;
                }
            }
        }
    ])
}

promptUser()
    .then(answers => { return generateReadMe(answers) })
    .then(answers => {
        fs.writeFile('./generated/README.md', answers, err => {
            err ? console.log(err) : console.log("Generated ReadMe");
        })
    });