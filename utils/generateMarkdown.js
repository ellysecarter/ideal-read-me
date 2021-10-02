// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if (licenseBadge === "MIT") {
    return "!Badge(https://img.shields.io/badge/License-MIT-yellow.svg)"
  };
  if (licenseBadge === "MPL 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (licenseBadge === "IPL 1.0") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
  if (licenseBadge === "EPL 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  if (licenseBadge === "ODC BY") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
  }
  if (licenseBadge === "None") {
    return ""
  }
}

// Create a function that returns the license link
function renderLicenseLink(licenseLink) {
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenseLink === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}


function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.licenseBadge}
 
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
${data.licenseLink}

# Contact
If you have any questions or would like to contribute to this project, please feel free to reach me at @${data.username} or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
