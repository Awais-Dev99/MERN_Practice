// const box=document.getElementById("todo-input");
// const list=document.getElementById("todo-list");

// function add(){
//     if(box.value === ''){
//         alert("You must write something")
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=box.value;
//         list.appendChild(li);
//     }
// }



// const box=document.getElementById("todo-input")
// const list=document.getElementById("todo-list")

// function add(){
//     if(box.value === ''){
//         alert("You must write something")
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=box.value;
//         list.appendChild(li)
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);

//     }
// box.value='';
// }
// list.addEventListener("click",function(e){
//     if(e.target.tagName==="Li"){
//         e.target.classList.toggle("checked");
//     }
//     else if (e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//     }
// },false)




const box=document.getElementById("todo-input");
const list=document.getElementById("todo-list");
function add(){
if(box.value===""){
    alert("You must write something");
}
else {
    let li=document.createElement("li");
    li.innerHTML=box.value;
    list.appendChild(li);
    let span=document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span)
}box.value="";
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toogle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);














