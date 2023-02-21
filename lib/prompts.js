module.exports = {
  managerPrompts: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office phone number?",
    },
  ],

  menu: [
    {
      type: "list",
      name: "employeeType",
      message: "Do you want to add another employee?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ],

  engineerPrompts: [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github?",
    },
  ],

  internPrompts: [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "Where is the intern currently enrolled in school?",
    },
  ],
};
