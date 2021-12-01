module.exports = template => {
    return `# ${template.title}

## Description 

${template.description}

---
## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
---
## Installation

${template.installation}

---
## Usage 

${template.usage}

---
## Credits

${template.credit}

---
## License

${template.License}

---
## Contributing

${template.contribution}

---
## Tests

${template.test}

---
## Questions

Link to Github: https://github.com/${template.github}

If you have any further questions, please contact me at ${template.email}
`
}