// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //create if statement to check in no license present
  if (!license) {
    return '';
  }
  return `
  ![badge](https://img.shields.io/badge/License-${license}-blue)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //create if statement to check for license
  if (!license) {
    return '';
  }
  return `
  This application is licensed by[${license}](https://opensource.org/licenses/${license})
  `;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //create if statement to check for license
  if (!license) {
    return '';
  }
  return `## License`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ### Questions
  If you have any questions, feel free to [email me!](mailto:${data.email})

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
