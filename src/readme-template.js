// generate Installation Section
const generateInstall = installData => {
    if (!installData) {
        return 'No Installation Required!'
    }
    return `${installData}`
}

// generate Contribution Section
const generateContribution = contributionData => {
    if (!contributionData) {
        return 'No contribution information for this project!'
    }
    return `${contributionData}`
}

// generate test Section
const generateTest = testData => {
    if (!testData) {
        return 'No test for this project!'
    }
    return `${contributionData}`
}
module.exports = template => {
    return `# ${template.title}

## Description 

${template.description}

---
## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

---
## Installation

${generateInstall(template.installation)}

---
## Usage 

${template.usage}

---
## License

${template.License}

---
## Contributing

${generateContribution(template.contribution)}

---
## Tests

${generateTest(template.test)}

---
## Questions

Link to Github: https://github.com/${template.github}

If you have any further questions, please contact me at ${template.email}
`
}