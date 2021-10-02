// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  
    if (licenseBadge !== "None") {
      return "![Badge](https://img.shields.io/badge/License-"+licenseBadge.replace(/\s+/g, '')+"-yellow.svg)"
    } else {
      return ""
    }
}

// Create a function that returns the license link
function renderLicenseLink(licenseBadge) {
  if (licenseBadge !== "None") {
    return "This project is licensed under "+licenseBadge+ " ."
  } else {
    return ""
  }
}


function generateMarkdown(data) {
  console.log(data)
  return `
# ${data.title}

${renderLicenseBadge(data.licenseBadge)}
 
## Description
${data.description}

# Deployed Application [${data.url}](${data.url})

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

# Contributors
${data.contributors}

# License
${renderLicenseLink(data.licenseBadge)}

# Contact
If you have any questions or would like to contribute to this project, please feel free to reach me at @[${data.username}](https://github.com/${data.username}) or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
