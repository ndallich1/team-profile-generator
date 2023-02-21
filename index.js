const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./lib/prompts");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

// Initialize a new employee object
// const init = () => {
//   promptUser() // update this function
//     .then((answers) => writeFile("index.html", generateHTML(answers)))
//     .then(() => console.log("Successfully created index.html!"))
//     .catch((err) => console.error(err));
// };

const managerPrompts = () => {
  inquirer.prompt(prompts.managerPrompts).then((answers) => {
    const { name, id, email, officeNumber } = answers; // object destructuring
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);
    nextQuestion();
  });
};

managerPrompts();

const nextQuestion = () => {
  inquirer.prompt(prompts.menu).then((answers) => {
    if (answers.employeeType == "Engineer") engineerPrompts();
    if (answers.employeeType == "Intern") internPrompts();
    if (answers.employeeType == "Finish building team") generateHTML();
  });
};

const engineerPrompts = () => {
  inquirer.prompt(prompts.engineerPrompts).then((answers) => {
    const { name, id, email, github } = answers; // object destructuring
    const engineer = new Engineer(name, id, email, github);
    team.push(engineer);
    nextQuestion();
  });
};

const internPrompts = () => {
  inquirer.prompt(prompts.internPrompts).then((answers) => {
    const { name, id, email, school } = answers; // object destructuring
    const intern = new Intern(name, id, email, school);
    team.push(intern);
    nextQuestion();
  });
};

const generateHTML = () => {
  console.log(team);
};
