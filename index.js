const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/readme-template');

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe Generated!'
            });
        });
    });
}

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
            message: 'Please Enter an installation steps: ',
            default: 'No Installation Required!'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the Usage of this application? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please Enter what this application is used for!');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'License',
            message: 'Select licenses that applies: ',
            choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter a contribution information: ',
            default: 'No contribution information for this project!'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test',
            default: 'No test for this project!'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username? (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is your github Repo name? (Required)',
            validate: repo => {
                if (repo) {
                    return true;
                } else {
                    console.log('Please enter a Github Repo name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is your github project link?',
            default: 'No link available for this project!'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
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
    .then(answers => {
        return generateReadMe(answers);
    })
    .then(fileData => {
        return writeToFile(fileData);
    })