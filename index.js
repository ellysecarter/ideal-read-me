const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('.utils/generateMarkdown');

// questions here
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Project Title'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.',
        default: ''
      },
      {
        type: 'input',
        name: 'screenshot',
        message: 'Please enter the relative path of a screenshot of your deployed application. (Press enter to skip)',
      },  
      {
        type: 'input',
        name: 'url',
        message: 'What is your project URL? (press enter to skip.)',
        default: ''
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
        default: ''
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        default: ''
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select what license you would like to include:',
        choices: ['MIT', 'MPL 2.0', 'IPL 1.0', 'EPL 1.0', 'ODC BY'],
        default: '0'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors you would like to name with commas in between each. If you do not have any contributors press enter',
        default: ''
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: ''
      },
    ]
     

// write to readme file

  const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
      if(err) { 
        console.log(err); 
      }
      else {
        console.log("Your Read Me was created! Go to README.md to check it out!");
      }
    })
  }
    

// initialize app here
const init = () => {
    inquirer.prompt(questions)
    .then(answers =>
      {
        writeToFile(fileName, answers);
      })
      .catch(error => {
          console.log(error);
      });
      }


init();