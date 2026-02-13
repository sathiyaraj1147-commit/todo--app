const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    const taskText = input.value;

    if(taskText === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // mark complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
});
