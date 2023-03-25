const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./lib/prompts");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

// Initialize a new employee object starting with a manager
const managerPrompts = () => {
  inquirer.prompt(prompts.managerPrompts).then((answers) => {
    const { name, id, email, officeNumber } = answers; // object destructuring
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);
    nextQuestion(); // calls nextQuestion function below
  });
};

// call function
managerPrompts();

// function to prompt the next question after manager questions are answered
const nextQuestion = () => {
  inquirer.prompt(prompts.menu).then((answers) => {
    if (answers.employeeType == "Engineer") engineerPrompts();
    if (answers.employeeType == "Intern") internPrompts();
    if (answers.employeeType == "Finish building team") {
      console.log("Team Created!");
      const html = generateHTML(team);
      fs.writeFile("index.html", html, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
      );
    }
  });
};

// function to ask engineer questions
const engineerPrompts = () => {
  inquirer.prompt(prompts.engineerPrompts).then((answers) => {
    const { name, id, email, github } = answers; // object destructuring
    const engineer = new Engineer(name, id, email, github);
    team.push(engineer);
    nextQuestion();
  });
};

// function to ask intern questions
const internPrompts = () => {
  inquirer.prompt(prompts.internPrompts).then((answers) => {
    const { name, id, email, school } = answers; // object destructuring
    const intern = new Intern(name, id, email, school);
    team.push(intern);
    nextQuestion();
  });
};

// function to add code to the template to create a card based on employee title
function createCard(team) {
  template = ``;
  team.forEach((element) => {
    if (element.getRole() === "Manager") {
      template += `<section class="tile is-parent p-1 m-2">
        <div class="card tile is-child m-1">
          <div class="has-background-primary-light">
            <h3 class="name subtitle is-3 p-1 m-1 has-text-primary">${element.getName()}</h3>
            <h4 class="job subtitle is-5 p-1 m-1 has-text-primary">
              <i class="fa-solid fa-mug-hot"></i> Manager
            </h4>
          </div>
          <div class="card-content p-1 m-1">
            <h5 class="id">ID: ${element.getId()}</h5>
            <h5 class="email">Email: <a href="mail to:${element.getEmail()}"></a>${element.getEmail()}</h5>
            <h5 class="officeNumber">Office Phone #: ${element.getOfficeNumber()}</h5>
          </div>
        </div>
      </section>`;
    } else if (element.getRole() === "Engineer") {
      template += `<section class="tile is-parent p-1 m-2">
        <div class="card tile is-child m-1">
          <div class="has-background-link-light">
            <h3 class="name subtitle is-3 p-1 m-1 has-text-link">${element.getName()}</h3>
            <h4 class="job subtitle is-5 p-1 m-1 has-text-link">
              <i class="fa-solid fa-glasses"></i> Engineer
            </h4>
          </div>
          <div class="card-content p-1 m-1">
            <h5 class="id">ID: ${element.getId()}</h5>
            <h5 class="email">Email: <a href="mail to:${element.getEmail()}"></a>${element.getEmail()}</h5>
            <h5 class="github">Github: <a href="${element.getGithub()}"></a>${element.getGithub()}</h5>
          </div>
        </div>
      </section>`;
    } else if (element.getRole() === "Intern") {
      template += ` <section class="tile is-parent p-1 m-2">
        <div class="card tile is-child m-1">
          <div class="has-background-info-light">
            <h3 class="name subtitle is-3 p-1 m-1 has-text-info">${element.getName()}</h3>
            <h4 class="job subtitle is-5 p-1 m-1 has-text-info">
              <i class="fa-solid fa-user-graduate"></i> Intern
            </h4>
          </div>
          <div class="card-content p-1 m-1">
            <h5 class="id">ID: ${element.getId()}</h5>
            <h5 class="email">Email: <a href="mail to:${element.getEmail()}"></a>${element.getEmail()}</h5>
            <h5 class="school">School: ${element.getSchool()}</h5>
          </div>
        </div>
      </section>`;
    }
  });
  return template;
}

// function to generate our html and insert the above template code into the main element
const generateHTML = (team) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;800&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/69d24a7ed4.js"
        crossorigin="anonymous"
      ></script>
      <style>
        * {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }

        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        footer {
          margin-top: auto;
        }

        body {
          background-color: rgb(245, 245, 245);
        }
      </style>
      <title>Team-Profile</title>
    </head>
  
    <body>
      <header>
        <section class="hero is-primary">
          <div class="hero-body">
            <p class="title is-1">My Team</p>
          </div>
        </section>
      </header>
  
      <main class="main">  
        <div class="tile is-ancestor m-4 p-4">
          ${createCard(team)}
        </div>
      </main>

    <footer class="footer p-4 has-background-primary">
      <div class="content pl-5 has-text-white">
        <p>
          Created by <a href="https://github.com/ndallich1">Nikki Dallich</a>
        </p>
      </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </body>
</html>
  `;
