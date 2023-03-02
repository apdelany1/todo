import { each } from "lodash";
import "./style.css";

const itemForm = document.querySelector(".itemForm")

const newItem = document.querySelector(".newItem")
const closeForm = document.querySelector(".closeForm")


newItem.addEventListener("click", () => {
    itemForm.classList.toggle("display")
})

closeForm.addEventListener("click", () => {
    itemForm.classList.toggle("display")
})

const addTask = document.querySelector("button")



export {itemForm, newItem, closeForm}