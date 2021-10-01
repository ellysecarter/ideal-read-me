const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/generateMarkdown');

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

//     //   screenshot of app here

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
        name: 'install',
        message: 'How do you install this project?',
        when: ({ confirmInstall }) => confirmInstall
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        when: ({ confirmUsage }) => confirmUsage
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Type in the name of your contributors?',
        when: ({ confirmContributors }) => confirmContributors
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license that you used for this project.',
        choices: ['MIT', 'Mozilla Public License 2.0','IBM Public License Version 1.0','Eclipse Public License 1.0', 'Attribution License (BY)','Other']
      },
    ]); 
  }; 
     

// write to readme file
const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename + 'md', data, (err) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve({
            ok: true,
            message: "Your Read Me was created successfully!",
          });
        }
      });
    });
  }
    

// initialize app here
const init() {}


init();

promptUser()







//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });