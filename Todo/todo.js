let box=document.getElementById("ul");
// let itm=document.getElementById("lis");
let ite=document.getElementById("items")
function addbtn(){
if(box.value===""){
    alert("You must write something");
}
else{
    let it=document.createElement("li");
   it.innerHTML=box.value;
   ite.appendChild(it);
   let span=document.createElement("span");
   span.innerHTML="\u00d7";
   it.appendChild(span);

   let edit=document.createElement("button");
   edit.innerHTML="Edit";
   edit.style.borderRadius= "20px";
   edit.style.marginLeft="10px"
//    edit.style.marginRight="10px"
    edit.style.cursor="pointer"
   it.appendChild(edit);
}
box.value="";
saveData()
}
ite.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
     else if (e.target.tagName === "BUTTON") {
        let li = e.target.parentElement;
        let currentText = li.firstChild.textContent;

        let newText = prompt("Edit your task:", currentText);

        if (newText !== null && newText !== "") {
            li.firstChild.textContent = newText;
        }
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem("data",items.innerHTML)
}