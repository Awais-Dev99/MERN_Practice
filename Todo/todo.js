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
}
box.value="";
}
ite.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)