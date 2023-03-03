import { each } from "lodash";
import home from "./home";
import "./style.css";

const toDoItem = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

let tasks = []

const task0 = toDoItem("Clean Your Car", "Your car so dirty, you cant even see out the back window", "04-03-2023", "Medium");
const task1 = toDoItem("Bake Cake", "We need a cake for Thanksgiving", "04-03-2023", "High");
const task2 = toDoItem("Learn React", "It is important for you as a dev", "04-03-2023", "Medium")

tasks.push(task0)
tasks.push(task1)
tasks.push(task2)

export { toDoItem, tasks }
