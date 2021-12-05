// render Badges to top of Section
const renderBadges = license => {
    switch (license) {
        case 'None':
            return ''
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'APACHE 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 3':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
}

// render Licenses Link to Licenses Section
const renderLicenses = license => {
    switch (license) {
        case 'None':
            return 'No Licenses for this project!'
        case 'MIT':
            return '[MIT](https://opensource.org/licenses/MIT)';
        case 'APACHE 2.0':
            return '[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
            return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 3':
            return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)'
    }
}

// Readme Template
module.exports = template => {
    return `# ${template.title} ${renderBadges(template.License)}

## Description 

${template.description}

Repo: https://github.com/${template.github}/${template.repo}

Link: ${template.link}

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

${template.installation}

---
## Usage 

${template.usage}

---
## License

${renderLicenses(template.License)}

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