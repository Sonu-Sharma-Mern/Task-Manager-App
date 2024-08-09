const taskList = []

const addTask = () => {
    const getTitleText = document.getElementById("titleInput")
    // const getDescText = document.getElementById("descInput")   
    if(getTitleText.value === ""){
        alert("Please Enter the title and description")
    } else {
        const getTitleValue = getTitleText.value
        const ulTaskList = document.getElementById("taskList")
        const li = document.createElement("li")
        li.classList.add("list")
        ulTaskList.appendChild(li)

        
         // Set the text of the list item to the current task
        li.textContent = getTitleValue; 

        taskList.push(getTitleValue) //  // Add the task to the array!

        // Create Edit Button
        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn")
        editBtn.textContent = "Edit"
        li.appendChild(editBtn)

        // Create Delete Button 
        const dltBtn = document.createElement("button")
        dltBtn.textContent = "Delete"
        dltBtn.classList.add("delete-btn")
        
        li.appendChild(dltBtn)
        ulTaskList.appendChild(li)
        console.log(taskList);
        
        // Remove task from the list!
        dltBtn.onclick = function () {
           ulTaskList.removeChild(li)
           const index = taskList.indexOf(getTitleValue)
           if (index > -1) {
                taskList.splice(index, 1)  // Remove specific task from array!
           }
           console.log(taskList);
        }

        // Edit task from the list!
        editBtn.onclick = function() {
            const editTask = prompt("Edit task title:",getTitleValue)
            if(editTask !== null && editTask.trim() !== ""){
                const index = taskList.indexOf(getTitleValue)
                if(index > -1){
                    taskList[index] = editTask  // Update task in the array!
                }
                li.textContent = editTask   //  Updated displayed text!
                li.appendChild(editBtn)
                li.appendChild(dltBtn)
            }
        }

        // Clear input after adding task
        getTitleText.value = '';

    }
}