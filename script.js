document.addEventListener("DOMContentLoaded", function(addTask){

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