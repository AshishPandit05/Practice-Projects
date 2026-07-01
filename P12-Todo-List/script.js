let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let todoBox = document.querySelector(".task-list");
btn.addEventListener("click", () => {
  if (inp.value.trim() === "") return;

  todoBox.innerHTML += `
    <div class="li">
      <h3 class="task">${inp.value}</h3>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>`;
  inp.value = "";
});

todoBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest(".li").remove();
  }
});
