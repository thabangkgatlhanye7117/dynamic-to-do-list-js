document.addEventListener("DOMContentLoaded", function(addTask){
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }


}

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  // Other initialization code
});
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(){

   const taskText = taskInput.value.trim();

   if (taskText === ""){
      alert("Enter a task");
    
   }

   if (taskText != ""){

    const listItem = document.createElement("li");
    listItem.textContent(taskText);

    const button = document.createElement("BUTTON");
    button.textContent("Remove");
    button.classList.add("remove-btn");
    button.addEventListener("click", function(){

       taskList.removeChild(taskList.childNode(listItem));
       button.appendChild(listItem);
       listItem.appendChild(taskList);
       taskInput.value = ""
    })

    addButton.addEventListener("click", function(){

      addTask();
    })

    taskInput.addEventListener("keypress", function(){

      if (["event.key"] == "Enter"){

        addTask();
      }


    })

   }
  }



})