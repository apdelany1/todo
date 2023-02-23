import { each } from "lodash";
import "./style.css";

const clickBox = document.querySelector("#square2");
const navs = document.querySelectorAll(".squares");

function project() {
  navs.forEach((button) => {
    button.style.backgroundColor = "#f5ebe0";
  });
  clickBox.style.backgroundColor = "#e3d5ca";
}

clickBox.addEventListener("click", project);
export default project;
