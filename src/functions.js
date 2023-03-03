import { tasks } from "./objects";

function loadTasks() {
    let items = document.querySelector(".items");
    items.innerHTML = "";

    tasks.forEach(element => {
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

export { loadTasks };
