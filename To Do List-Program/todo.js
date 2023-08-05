//defining the Const for the the Input and The Unordered List
const inpbox=document.getElementById("in-box");
const list=document.getElementById("list-contain");

function addtask(){
    if(inpbox.value=== ''){
        alert("You need to enter a Task!");
    }
    else{
        //this ELSE part Allow user to add more LI elements to the List
        let li=document.createElement("li");
        li.innerHTML=inpbox.value;
        list.appendChild(li);
        Savetasks()
        //This the X mark we Add after the task element so you click on it and delete it
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inpbox.value="";
    Savetasks();
}
// this command allow use to delete the tasks via the X mark and toggle the check mark
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        Savetasks();
    }
    else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    Savetasks();
    }
},false);
//This function allow user to save it's data even when he reload the page in order to avoid the lost of the Task he wanna finish.
function Savetasks(){
    localStorage.setItem('tasks',list.innerHTML);
}
//This Function allow to Display the Tasks after saving them.
function showTask(){
    list.innerHTML=localStorage.getItem("tasks");
}
//calling the display function
showTask();