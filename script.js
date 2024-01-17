const inputbox=document.getElementsByClassName("txtbox")[0]
const listcontainer=document.getElementsByClassName("list-container")[0]


function addTask(){
    let taskname=inputbox.value;
    if(taskname===""){
        alert("Please enter something for the task")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=taskname
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        saveData()
    }
    inputbox.value=""
}

listcontainer.addEventListener("click", function(event){
    if (event.target.tagName==="LI") {
        event.target.classList.toggle("checked");
        saveData()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}

showTask()