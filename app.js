let listcontainer = document.getElementById("list-container");

let inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("Add YourTask");
  } else {
    let task = document.createElement("li");
    task.textContent = inputBox.value;
    listcontainer.appendChild(task);

    let span = document.createElement("span");
    span.textCntect = "\u00d7";
    task.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listcontainer.addEventListener("click", (el) => {
  if (el.target.tagName == "LI") {
    el.target.classList.toggle("checked");
    saveData();
  } else if (el.target.tagName == "SPAN") {
    el.targetparentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function shorData() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

shorData();
