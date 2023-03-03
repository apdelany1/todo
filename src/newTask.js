import { each } from "lodash";
import "./style.css";

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
addTask.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(mainForm[1].value);
    console.log(mainForm[2].value);
    console.log(mainForm[3].value);
    console.log(mainForm[4].value);
})

export { itemForm, newItem, closeForm, addTask };
