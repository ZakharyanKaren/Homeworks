const input = document.querySelector(".my-input");
const addBtn = document.querySelector(".add-btn");
const container = document.querySelector(".container-body");
const removeBtn = document.querySelector(".remove-btn");

addBtn.addEventListener("click", () => {
  if (input.value) {
    const div = document.createElement("div");
    const iconsDiv = document.createElement("div");
    const p = document.createElement("p");
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("remove-icon", "fas", "fa-times");

    div.classList.add("my-tasks");
    iconsDiv.classList.add("task-icons");

    iconsDiv.insertAdjacentHTML(
      "beforeend",
      `<i class="submit-icon fas fa-check"></i>
       <i class="edit-icon fas fa-edit"></i>`
    );
    iconsDiv.append(removeIcon);
    p.append(input.value);
    div.append(p);
    div.append(iconsDiv);
    container.append(div);

    input.value = "";

    removeIcon.addEventListener("click", (event) => {
      div.remove();
    });
  }
});

removeBtn.addEventListener("click", () => {
  container.textContent = "";
});
