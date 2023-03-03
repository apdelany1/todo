import "./style.css";
import color from "./functions";
import { toDoItem, personFactory } from "./objects";
import { loadTasks } from "./functions";

const clickBox = document.querySelector("#square1");
const navs = document.querySelectorAll(".squares");

function home() {
  navs.forEach((button) => {
    button.style.backgroundColor = "#f5ebe0";
  });
  clickBox.style.backgroundColor = "#e3d5ca";

  loadTasks()

}

clickBox.addEventListener("click", home);
export default home;
