document.addEventListener('DOMContentLoaded',()=>{
const todoinput = document.getElementById("taskInput");
const  addtaskbtn= document.getElementById("addTask")
const addtask = document.getElementById("taskList")

let tasks =JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task =>  rendertask(task));

addtaskbtn.addEventListener("click",()=>{
    const tasktext = todoinput.value.trim();
    if(tasktext ==="") { 
        console.log("emty input field");
        return;
    }
    const newtask ={
        id:Date.now(),
        text:tasktext,
        completed:false,
    };

    tasks.push(newtask);
    savetask();
    rendertask(newtask)
    todoinput.value = "";
    console.log(tasks);
})

function rendertask(task){
    const li = document.createElement("li");
    li.setAttribute("data-id",task.id);
    li.innerHTML = `
    <span>${task.text}<s/pan>
    <button>delete</button>`;
    li.addEventListener("click",(e)=>{
       task.completed =!task.completed;
       li.classList.toggle("completed")
       savetask();
    })
    li.querySelector("button").addEventListener("click",(e)=>{
         e.stopPropagation();
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove();
        savetask();
    })

     addtask.appendChild(li);
}

function savetask(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
})
