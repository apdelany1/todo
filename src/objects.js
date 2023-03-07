import { each } from "lodash";
import home from "./home";
import "./style.css";

const toDoItem = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const projectObj = (title, description, dueDate) => {
  return { title, description, dueDate };
};

let tasks = [];
let projects = [];
let complete = [];

const task0 = toDoItem(
  "Clean Your Car",
  "Your car so dirty, you cant even see out the back window",
  "04-03-2023",
  "Medium"
);
const task1 = toDoItem(
  "Bake Cake",
  "We need a cake for Thanksgiving",
  "04-03-2023",
  "High"
);
const task2 = toDoItem(
  "Learn React",
  "It is important for you as a dev",
  "04-03-2023",
  "Medium"
);

const complete0 = toDoItem(
  "Win lottery",
  "You need money!",
  "04-03-2021",
  "High"
);
const complete1 = toDoItem(
  "Get Suit From Cleaners",
  "You need it for the wedding",
  "09-13-2023",
  "low"
);
const complete2 = toDoItem(
  "Pump basketball",
  "Cant ball with flat ball",
  "01-07-2023",
  "Medium"
);

const sampleProject = projectObj(
  "Furnish Home",
  "Need to stop at multiple stores and pick up several items",
  "04-01-2023",
); 

tasks.push(task0);
tasks.push(task1);
tasks.push(task2);

projects.push(sampleProject);

complete.push(complete0);
complete.push(complete1);
complete.push(complete2);



export { toDoItem, projectObj, projects, tasks, complete };
