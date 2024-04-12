#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
  let Question = await inquirer.prompt([
    {
      name: "Q1",
      type: "input",
      message: "What do you like to add in your todos?",
    },
    {
      name: "Q2",
      type: "confirm",
      message: "Do you like to add more in your todos?",
      default: "true",
    },
  ]);
  todos.push(Question.Q1);
  condition = Question.Q2;
}
