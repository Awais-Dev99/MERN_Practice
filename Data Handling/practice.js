////////Exercise No 1
// Write a function that returns all active users

const users = [
 { id: 1, name: "John", age: 25, email: "john@example.com", isActive: true, tags: ["developer",
"javascript"] },
 { id: 2, name: "Jane", age: 32, email: "jane@example.com", isActive: false, tags: ["designer",
"css"] },
 { id: 3, name: "Bob", age: 41, email: "bob@example.com", isActive: true, tags: ["developer",
"python"] },
 { id: 4, name: "Mary", age: 28, email: "mary@example.com", isActive: true, tags: ["manager",
"leadership"] },
 { id: 5, name: "Alex", age: 19, email: "alex@example.com", isActive: false, tags: ["intern",
"student"] }
];

const products = [
 { id: 101, name: "Laptop", price: 999.99, category: "electronics", stock: 15 },
 { id: 102, name: "Smartphone", price: 699.99, category: "electronics", stock: 25 },
 { id: 103, name: "Book", price: 19.99, category: "books", stock: 50 },
 { id: 104, name: "Headphones", price: 149.99, category: "electronics", stock: 10 },
 { id: 105, name: "T-shirt", price: 29.99, category: "clothing", stock: 100 },
 { id: 106, name: "Shoes", price: 79.99, category: "clothing", stock: 30 }
];


const fil=users.filter(users =>users.isActive==true);
console.log(fil);

// Exercise 2: Map
// Write a function that returns an array containing just the names of all users

const nam=users.map(users => users.name)
console.log(nam);

// Exercise 3: Find
// Write a function that finds and returns a user by their ID

const us=products.find(products => products.id==103);
console.log(us);

// Exercise 4: Some/Every
// Write a function that checks if all users are active
const act=users.every(users => users.isActive)
console.log(act);

// Exercise 5: Reduce
// Write a function that calculates the average age of all users
const red = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(red);

// Exercise 6: Complex Filter
// Write a function that returns users who are active and older than a specified age
const acti=users.filter(users => users.isActive==true && users.age>30 )
console.log(acti);

// Exercise 7: Sorting
// Write a function that returns all products sorted by price (low to high)
const pri=products.sort((a,b) => a.price - b.price)
console.log(pri);