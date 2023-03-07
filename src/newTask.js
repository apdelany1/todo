import { each } from "lodash";
import "./style.css";
import { toDoItem, tasks } from "./objects";
import { loadTasks } from "./functions";
import home from "./home";

const itemForm = document.querySelector(".itemForm");
const mainForm = document.querySelector("form");
const newItem = document.querySelector(".newItem");
const closeForm = document.querySelector(".closeForm");

newItem.addEventListener("click", () => {
  itemForm.classList.toggle("display");
});

closeForm.addEventListener("click", () => {
  document.querySelector("form").reset();
  itemForm.classList.toggle("display");
});

const addTask = document.querySelector("#button");
addTask.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    mainForm[1].value === "" ||
    mainForm[2].value === "" ||
    mainForm[3].value === ""
  ) {
    alert("Must Fill Out All Fields");
  } else {
    let newDo = toDoItem(
      mainForm[1].value,
      mainForm[2].value,
      mainForm[3].value,
      mainForm[4].value
    );

    tasks.push(newDo);
    loadTasks();
    home();
    document.querySelector("form").reset();
  }
});

export { itemForm, newItem, closeForm, addTask };
