import { tasks, complete } from "./objects";
import { projectObj, projects } from "./objects";

function loadTasks() {
  let items = document.querySelector(".items");
  items.innerHTML = "";

  //task items being generated
  tasks.forEach((element) => {
    if (element.completed == false) {
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

      let completed = document.createElement("span");
      completed.innerText = "check";
      completed.classList.add("material-symbols-outlined");
      completed.classList.add("completed");

      let trash = document.createElement("span");
      trash.innerText = "delete";
      trash.classList.add("material-symbols-outlined");
      trash.classList.add("deleted");

      leftDiv.append(header);
      leftDiv.append(description);
      rightDiv.append(date);
      rightDiv.append(priority);
      rightDiv.append(trash);
      rightDiv.append(completed);

      newDiv.append(leftDiv);
      newDiv.append(rightDiv);

      newDiv.classList.add("listItem");

      items.append(newDiv);
    }
  });

  completeTask();
  deleteTask();
}

function loadProjects() {
  let items = document.querySelector(".items");
  items.innerHTML = "";

  loadProjectForm();

  projects.forEach((element) => {
    let newDiv = document.createElement("div");
    let rightDiv = document.createElement("div");
    let leftDiv = document.createElement("div");

    let header = document.createElement("h4");
    header.innerText = element.title;

    let description = document.createElement("p");
    description.innerText = element.description;

    let date = document.createElement("h6");
    date.innerText = element.dueDate;

    leftDiv.append(header);
    leftDiv.append(description);
    rightDiv.append(date);

    newDiv.append(leftDiv);
    newDiv.append(rightDiv);

    newDiv.classList.add("listItem");

    items.append(newDiv);
  });
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
    newDiv.classList.add("completedItems");
  });
}

//form for the project
function loadProjectForm() {
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
    let body = document.querySelector(".container");
    let form = document.createElement("div");
    form.innerHTML = `<form action="#" id="form2">
    <fieldset>
      <legend>Add A Project</legend>
      <div class="projectCollective">
        <input type="text" placeholder="Project Name" id="taskInput2" required />
        <input
          type="text"
          placeholder="Description"
          id="descriptionInput2"
          required
        />
        <input type="date" id="dateInput2" required />
        <button type="submit" id="button2">Add</button>
      </div>
    </fieldset>
    <br>
    <span class="material-symbols-outlined closeForm2"> last_page </span>
    </form>`;

    form.classList.add("addProject");
    body.append(form);

    const addTask = document.querySelector("#button2");
    addTask.addEventListener("click", function (e) {
      e.preventDefault();

      const mainForm = document.querySelector("#form2");

      if (
        mainForm[1].value === "" ||
        mainForm[2].value === "" ||
        mainForm[3].value === ""
      ) {
        alert("Must Fill Out All Fields");
      } else {
        let newDo = projectObj(
          mainForm[1].value,
          mainForm[2].value,
          mainForm[3].value
        );
        document.querySelector("#form2").reset();

        projects.push(newDo);
        loadProjects();
      }
    });

    let goBack = document.querySelector(".closeForm2");
    goBack.addEventListener("click", () => {
      form.innerHTML = "";
      form.classList.remove("addProject");
      loadProjects();
    });
  });
}

function completeTask() {
  let deleteBtn = document.querySelectorAll(".completed");

  deleteBtn.forEach((userItem) => {
    userItem.addEventListener("click", () => {
      let task = userItem.parentNode.parentNode.firstChild.firstChild.innerText;

      tasks.forEach((element) => {
        if (element.title == task) {
          element.completed = true;
          complete.push(element);
          loadTasks();
          setTimeout(() => {
            alert("Task Complete!");
          }, 100);
        }
      });
    });
  });
}

function deleteTask() {
  let deleteBtn = document.querySelectorAll(".deleted");

  deleteBtn.forEach((userItem) => {
    userItem.addEventListener("click", () => {
      let task = userItem.parentNode.parentNode.firstChild.firstChild.innerText;

      tasks.forEach((element) => {
        if (element.title == task) {

          let filtered = tasks.filter(function (obj) {
            return obj.title !== task;
          });
          console.log(tasks)
          tasks = filtered;
          console.log(tasks)
          loadTasks();
          setTimeout(() => {
            alert("Task Deleted!");
          }, 100);
        }
      });
    });
  });
}

export { loadTasks, loadProjects, loadComplete };
