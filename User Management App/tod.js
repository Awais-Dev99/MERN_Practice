let tableBody = document.getElementById("userTable");
let form = document.getElementById("userForm");
let id = 1;

form.addEventListener("submit", addbtn);

function addbtn(event) {

event.preventDefault(); // stop page reload

let first = document.getElementById("firstName").value;
let last = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

if(first === "" || last === "" || email === "" || phone === ""){
    alert("Please fill all fields");
    return;
}

let tr = document.createElement("tr");

tr.innerHTML = `
<td class="border p-2">${id++}</td>
<td class="border p-2">${first}</td>
<td class="border p-2">${last}</td>
<td class="border p-2">${email}</td>
<td class="border p-2">${phone}</td>
<td class="border p-2 text-red-500 cursor-pointer" onclick="this.parentElement.remove()">Delete</td>
`;

tableBody.appendChild(tr);
save()
    
form.reset();
}

function save(){
    localStorage.setItem("todo",tableBody.innerHTML)
}