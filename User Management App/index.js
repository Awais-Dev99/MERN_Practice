const API = "https://dummyjson.com/users";

const table = document.getElementById("userTable");
const form = document.getElementById("userForm");
const searchInput = document.getElementById("searchInput");

let users = [];
let editId = null;

/////////////////////////////////////////////////
// READ USERS
/////////////////////////////////////////////////

async function loadUsers() {

try {

const res = await fetch(API)
const data = await res.json();

users = data.users;

renderUsers(users);

} catch (error) {

console.error("Error loading users", error);

}

}

/////////////////////////////////////////////////
// RENDER USERS
/////////////////////////////////////////////////

function renderUsers(list){

table.innerHTML = "";

list.forEach(user => {

const row = document.createElement("tr");

row.innerHTML = `
<td class="border p-2">${user.id}</td>
<td class="border p-2">${user.firstName}</td>
<td class="border p-2">${user.lastName}</td>
<td class="border p-2">${user.email}</td>
<td class="border p-2">${user.phone}</td>
<td class="border p-2 space-x-2">
<button class="bg-yellow-400 px-2 py-1 rounded editBtn">Edit</button>
<button class="bg-red-500 text-white px-2 py-1 rounded deleteBtn">Delete</button>
</td>
`;

/////////////////////////////////////////////////
// EDIT BUTTON
/////////////////////////////////////////////////

row.querySelector(".editBtn").addEventListener("click", () => {

document.getElementById("firstName").value = user.firstName;
document.getElementById("lastName").value = user.lastName;
document.getElementById("email").value = user.email;
document.getElementById("phone").value = user.phone;

editId = user.id;

});

/////////////////////////////////////////////////
// DELETE BUTTON
/////////////////////////////////////////////////

row.querySelector(".deleteBtn").addEventListener("click", () => {

deleteUser(user.id);

});

table.appendChild(row);

});

}

/////////////////////////////////////////////////
// CREATE OR UPDATE
/////////////////////////////////////////////////

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

const userData = { firstName,lastName,email,phone };

try{

/////////////////////////////////////////////////
// UPDATE
/////////////////////////////////////////////////

if(editId){

await fetch(`${API}/${editId}`,{
method:"PUT",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(userData)
});

users = users.map(u =>
u.id === editId ? { ...u, ...userData } : u
);

editId = null;

alert("User Updated");

}

/////////////////////////////////////////////////
// CREATE
/////////////////////////////////////////////////

else{

const res = await fetch(`${API}/add`,{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(userData)
});

const newUser = await res.json();

users.unshift(newUser);

alert("User Added");

}

renderUsers(users);

form.reset();

}catch(err){

console.error(err);

}

});

/////////////////////////////////////////////////
// DELETE
/////////////////////////////////////////////////

async function deleteUser(id){

try{

await fetch(`${API}/${id}`,{
method:"DELETE"
});

users = users.filter(u => u.id !== id);

renderUsers(users);

alert("User Deleted");

}catch(err){

console.error(err);

}

}

/////////////////////////////////////////////////
// SEARCH
/////////////////////////////////////////////////

searchInput.addEventListener("input", async ()=>{

const query = searchInput.value;

if(query === ""){

renderUsers(users);
return;

}

const res = await fetch(`${API}/search?q=${query}`);
const data = await res.json();

renderUsers(data.users);

});

/////////////////////////////////////////////////

loadUsers();