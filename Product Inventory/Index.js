const API = "https://fakestoreapi.com/products";

const grid = document.getElementById("productGrid");
const form = document.getElementById("productForm");
const filter = document.getElementById("categoryFilter");

const loading = document.getElementById("loading");
const emptyState = document.getElementById("emptyState");

let products = [];
let editId = null;

/////////////////////////////////////////////////
// LOAD PRODUCTS
/////////////////////////////////////////////////

async function loadProducts(){

try{

loading.classList.remove("hidden");

const res = await fetch(API);
const data = await res.json();

products = data;

renderProducts(products);

}catch(err){

console.error(err);

}finally{

loading.classList.add("hidden");

}

}

/////////////////////////////////////////////////
// RENDER PRODUCTS
/////////////////////////////////////////////////

function renderProducts(list){

grid.innerHTML = "";

if(list.length === 0){

emptyState.classList.remove("hidden");
return;

}

emptyState.classList.add("hidden");

list.forEach(p => {

const card = document.createElement("div");

card.className =
"bg-white rounded shadow p-4 hover:shadow-lg transition";

card.innerHTML = `
<img src="${p.image}" class="h-40 mx-auto object-contain mb-4">

<h3 class="font-bold">${p.title}</h3>

<p class="text-sm text-gray-500 mb-2">
${p.description.substring(0,60)}...
</p>

<p class="${p.price < 20 ? "text-green-600 font-bold" : "font-semibold"}">
$${p.price}
</p>

<p class="text-xs text-gray-400 mb-3">${p.category}</p>

<div class="flex gap-2">

<button class="editBtn bg-yellow-400 px-3 py-1 rounded">
Edit
</button>

<button class="deleteBtn bg-red-500 text-white px-3 py-1 rounded">
Delete
</button>

</div>
`;

/////////////////////////////////////////////////
// EDIT
/////////////////////////////////////////////////

card.querySelector(".editBtn").addEventListener("click", () => {

document.getElementById("title").value = p.title;
document.getElementById("price").value = p.price;
document.getElementById("description").value = p.description;
document.getElementById("category").value = p.category;
document.getElementById("image").value = p.image;

editId = p.id;

});

/////////////////////////////////////////////////
// DELETE
/////////////////////////////////////////////////

card.querySelector(".deleteBtn").addEventListener("click", () => {

deleteProduct(p.id);

});

grid.appendChild(card);

});

}

/////////////////////////////////////////////////
// CREATE / UPDATE
/////////////////////////////////////////////////

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const productData = {

title: document.getElementById("title").value,
price: Number(document.getElementById("price").value),
description: document.getElementById("description").value,
image: document.getElementById("image").value,
category: document.getElementById("category").value

};

try{

/////////////////////////////////////////////////
// UPDATE
/////////////////////////////////////////////////

if(editId){

await fetch(`${API}/${editId}`,{
method:"PUT",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(productData)
});

products = products.map(p =>
p.id === editId ? { ...p, ...productData } : p
);

alert("Product Updated");

editId = null;

}

/////////////////////////////////////////////////
// CREATE
/////////////////////////////////////////////////

else{

const res = await fetch(API,{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(productData)
});

const newProduct = await res.json();

products.unshift(newProduct);

alert("Product Added");

}

renderProducts(products);

form.reset();

}catch(err){

console.error(err);

}

});

/////////////////////////////////////////////////
// DELETE
/////////////////////////////////////////////////

async function deleteProduct(id){

try{

await fetch(`${API}/${id}`,{
method:"DELETE"
});

products = products.filter(p => p.id !== id);

renderProducts(products);

alert("Product Deleted");

}catch(err){

console.error(err);

}

}

/////////////////////////////////////////////////
// FILTER CATEGORY
/////////////////////////////////////////////////

filter.addEventListener("change", async () => {

const category = filter.value;

if(category === ""){

renderProducts(products);
return;

}

const res = await fetch(`${API}/category/${category}`);
const data = await res.json();

renderProducts(data);

});

/////////////////////////////////////////////////

loadProducts();