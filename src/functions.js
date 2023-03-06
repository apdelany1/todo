import { tasks } from "./objects";
import { complete } from "./objects";
import { newTaskAction } from "./newTask";
import { divide } from "lodash";

function loadTasks() {
  let items = document.querySelector(".items");
  items.innerHTML = "";

  //task items being generated
  tasks.forEach((element) => {
    let newDiv = document.createElement("div");
    let rightDiv = document.createElement("div");
    let leftDiv = document.createElement("div");

    let header = document.createElement("h4");
    header.innerText = element.title;

    let description = document.createElement("p");
    description.innerText = element.description;

    let date = document.createElement("h6");
    date.innerText = element.dueDate;

    let priority = document.createElement("h5");
    priority.innerText = element.priority;

    leftDiv.append(header);
    leftDiv.append(description);
    rightDiv.append(date);
    rightDiv.append(priority);

    newDiv.append(leftDiv);
    newDiv.append(rightDiv);

    newDiv.classList.add("listItem");

    items.append(newDiv);
  });
}

function loadProjects() {
  let items = document.querySelector(".items");
  items.innerHTML = "";

  let newItemButton = document.createElement("div");
  newItemButton.classList.add("newItem");
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.innerText = "add_task";
  newItemButton.append(span);
  items.append(newItemButton);

  newItemButton.addEventListener("click", () => {

    let body = document.querySelector(".container")
    let form = document.createElement("div")
    form.innerHTML = `<form action="#">
    <fieldset>
      <legend>Add A Project</legend>
      <div class="projectCollective">
        <input type="text" placeholder="Project Name" id="taskInput" required />
        <input
          type="text"
          placeholder="Description"
          id="descriptionInput"
          required
        />
        <input type="date" id="dateInput" required />
        <button type="submit" id="button">Add</button>
      </div>
    </fieldset>
    <br>
    <span class="material-symbols-outlined closeForm2"> last_page </span>
  </form>`

  form.classList.add("addProject")
  body.append(form);

  let goBack = document.querySelector(".closeForm2");
  goBack.addEventListener("click", () => {
    form.innerHTML = "";
    form.classList.remove("addProject")
  })

  })
}

function loadComplete() {
    let items = document.querySelector(".items");
    items.innerHTML = "";
  
    //task items being generated
    complete.forEach((element) => {
      let newDiv = document.createElement("div");
      let rightDiv = document.createElement("div");
      let leftDiv = document.createElement("div");
  
      let header = document.createElement("h4");
      header.innerText = element.title;
  
      let description = document.createElement("p");
      description.innerText = element.description;
  
      let date = document.createElement("h6");
      date.innerText = element.dueDate;
  
      let priority = document.createElement("h5");
      priority.innerText = element.priority;
  
      leftDiv.append(header);
      leftDiv.append(description);
      rightDiv.append(date);
      rightDiv.append(priority);
  
      newDiv.append(leftDiv);
      newDiv.append(rightDiv);
  
      newDiv.classList.add("listItem");
  
      items.append(newDiv);
      newDiv.classList.add("completedItems")
    });
  }

export { loadTasks, loadProjects, loadComplete };
