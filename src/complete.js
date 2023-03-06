import { loadComplete } from "./functions";
import "./style.css";

const clickBox = document.querySelector("#square3");
const navs = document.querySelectorAll(".squares");

function complete() {
  navs.forEach((button) => {
    button.style.backgroundColor = "#f5ebe0";
  });
  clickBox.style.backgroundColor = "#e3d5ca";

  loadComplete();
}

clickBox.addEventListener("click", complete);
export default complete;
