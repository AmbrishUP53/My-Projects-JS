
document.addEventListener("DOMContentLoaded" ,()=>{

const addTask = document.getElementById("Add-task-Btn");
const inputTask = document.querySelector(".input-box");
const toDoList = document.getElementById("TO-do-list");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [] //it holde the items store in localestorage if exist else it is an empty array

tasks.forEach(task => renderTask(task)); //here we display the task store in localestorage 

addTask.addEventListener("click" ,(e)=>{
    if(inputTask.value ==="" ) return; 

    const newTask = {
        id : Date.now() ,
        text : inputTask.value.trim() ,
        completed : false 
    }
    tasks.push(newTask) ;
    saveTask();
    renderTask(newTask); //to instant add a task in taskbar 
    inputTask.value= "" ;
});

function renderTask(task){
    let newList = document.createElement("li");
    newList.setAttribute("dataId" , task.id);
    if(task.completed) {
        newList.classList.add("completed");
    }
    newList.innerHTML = `
    <span>${task.text} </span>
    <button>Delete </button>` ;

    newList.addEventListener("click" , (e)=>{
        if(e.target.innerText === "Delete") return ;
        task.completed = !task.completed;
        newList.classList.toggle("completed"); 
        saveTask()
    })
    
    toDoList.appendChild(newList);

    newList.querySelector("button").addEventListener("click" ,(e)=>{
        e.stopPropagation() //preventy toggle from firing
        console.log("delete")
        tasks = tasks.filter((t) => t.id !== task.id );
        newList.remove()
        saveTask()
    })
}

function saveTask(){
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}
})