const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// questions here
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description for this project.');
            return false;
          }
        }
      },

    //   screenshot of app here

    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your deployed application here',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('If you do not have a project link, please provide the link to your repo');
            return false;
          }
        }
      },

      {
        type: 'checkbox',
        name: 'contents',
        message: 'Please select any sections to add to your table of contents?',
        choices: ['Technologies Used', 'Features', 'Known Bugs', 'References', 'Contributors']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
        when: ({ confirmAbout }) => confirmAbout
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        when: ({ confirmAbout }) => confirmAbout
      },
      {
        type: 'confirm',
        name: 'contributors',
        message: 'Did you have any other contributors?',
        default: false
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license that you used for this project.',
        default: false
      },
    ]);
  };
  

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();