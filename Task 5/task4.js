const users = [
{ name: "Alice", courses: ["Math", "Science", "English"] },
{ name: "Bob", courses: ["Math", "Art"] },
{ name: "Charlie", courses: ["Science", "Math", "History"] },
{ name: "David", courses: ["Math", "English"] },
{ name: "Eve", courses: ["Art", "Science"] }
];
let num=[];
for(let i=0 ; i<users.length ;i++ ){
    for(let j=0 ; j<users[i].courses.length ; j++){
       let subject = users[i].courses[j];

    if (num[subject]) {
      num[subject]++;
    } else {
      num[subject] = 1;
    }
    }
}
console.log(num);
let maxCourse = "";
let maxCount = 0;

for (let subject in num) {
  if (num[subject] > maxCount) {
    maxCount = num[subject];
    maxCourse = subject;
  }
}

console.log("Most popular course:", maxCourse);
console.log("Number of students:", maxCount);


