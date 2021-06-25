const input = document.querySelector(".my-input");
const container = document.querySelector(".container-body");
const removeBtn = document.querySelector(".remove-btn");

function addTaskFunction() {
  if (input.value) {
    const div = document.createElement("div");
    const taskInput = document.createElement("input");
    const iconBtnDiv = document.createElement("div");
    const iconBtnCheck = document.createElement("button");
    const iconBtnEdit = document.createElement("button");
    const iconBtnRemove = document.createElement("button");
    const checkIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const removeIcon = document.createElement("i");

    div.classList.add("my-tasks");
    taskInput.readOnly = "true";
    taskInput.classList.add("task-input");
    iconBtnDiv.classList.add("iconBtnDiv");
    checkIcon.classList.add("submit-icon", "fas", "fa-check");
    editIcon.classList.add("edit-icon", "fas", "fa-edit");
    removeIcon.classList.add("remove-icon", "fas", "fa-times");

    iconBtnCheck.append(checkIcon);
    iconBtnEdit.append(editIcon);
    iconBtnRemove.append(removeIcon);

    iconBtnDiv.append(iconBtnCheck);
    iconBtnDiv.append(iconBtnEdit);
    iconBtnDiv.append(iconBtnRemove);

    taskInput.value = input.value;
    div.append(taskInput);
    div.append(iconBtnDiv);
    container.append(div);

    input.value = "";

    checkIcon.addEventListener("click", () => {
      taskInput.readOnly = "true";
      taskInput.style.border = "none";
    });

    iconBtnEdit.addEventListener("click", () => {
      taskInput.readOnly = "";
      taskInput.style.border = "1px solid #ff00e1";
    });

    iconBtnRemove.addEventListener("click", () => {
      div.remove();
    });
  }
}

function allTaskRemove() {
  container.textContent = "";
}
