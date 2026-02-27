let main={
    name:"khan",
    fatherName:"raza",
    age:30
}


let{name,fatherName}=main;

document.getElementById("user").innerHTML=name+" "+fatherName;



let count=0

function updatecount(){
document.getElementById("counter").innerHTML=count;

}

function increment(){
    count++;
    updatecount();
}
function decrement(){
    count--;
    updatecount();
}
function reset(){
    count=0;
    updatecount();
}

const form=document.getElementById("student")

const students=[];
form.addEventListener('submit',function(event){

    event.preventDefault();
   const name= document.getElementById('name').value;
   const fatherName= document.getElementById('fatherName').value;
   const course= document.getElementById('course').value;
   const semester= document.getElementById('semester').value;
const studentsdata={
    name: name,
    fatherName: fatherName,
    course: course,
    semester: semester

}
students.push(studentsdata);

console.log("All students Data");
   console.log(students);
//    console.log("Name  ",name);
//    console.log("FatherName  ",fatherName);
//    console.log("Course  ",course);
//    console.log("Semester   ",semester);
})











