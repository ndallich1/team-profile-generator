const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
