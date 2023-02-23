import "./style.css";

const clickBox = document.querySelector("#square1");
const navs = document.querySelectorAll(".squares");

function home() {
  navs.forEach((button) => {
    button.style.backgroundColor = "#f5ebe0";
  });
  clickBox.style.backgroundColor = "#e3d5ca";
}

clickBox.addEventListener("click", home);
export default home;
