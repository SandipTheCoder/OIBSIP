const inputBox=document.getElementById("inputBox");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==''){
        alert("you have to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveTask();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
}, false);

function saveTask(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showTask(); 