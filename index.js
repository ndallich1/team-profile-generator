const Employee = require("./lib/Employee");
const fs = require("fs");
const prompts = require("./lib/prompts");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

// Initialize a new employee object
const employee = new Employee();

employee.create();
