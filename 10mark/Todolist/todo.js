const taskInput = document.getElementById("taskInput");
const timeInput = document.getElementById("timeInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  todoList.innerHTML = "";

  tasks.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = item.completed ? "completed" : "";

    li.innerHTML = `
      <span>${item.task} - ${item.time}</span>
      <div class="actions">
        <button class="completeBtn" onclick="toggleComplete(${index})">
          ${item.completed ? "Undo" : "Done"}
        </button>
        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("Enter a task!");
    return;
  }

  const newTask = {
    task: taskInput.value,
    time: timeInput.value,
    completed: false,
  };

  tasks.push(newTask);
  saveAndShow();

  taskInput.value = "";
  timeInput.value = "";
});

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndShow();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndShow();
}

function saveAndShow() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

showTasks();