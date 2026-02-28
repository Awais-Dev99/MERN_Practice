//Copying values from one array to another
// let cars=["BMW" , "Volvo" , "Audi" , "Honda" , "Toyota"]
// let brands=[cars]
// console.log(brands);


// cars[1].push(brands[1])
// for(let i=0 ; i<=cars.length ; i++){
//     brands.push(cars[i])
// }




//Function
// function greet(){
//     console.log("This is a Function");
// }
// greet();

// let arrow = () =>{console.log("Arrow Function");}
// arrow()




//maping
// let student=[
// {name:"khan",
//     fatherName:"Ali",
//     class:5,
//     course:[
//         {name:"CIT"},
//         {name:"WEB"}
//     ]
// },
// {name:"Mujeeb",
//     fatherName:"ahmad",
//     class:6,
//     course:[
//         {name:"MERN"},
//         {name:"DEV"}
//     ]
// },
// {name:"arshad",
//     fatherName:"mustafa",
//     class:7,
//     course:[
//         {name:"JAVA"},
//         {name:"C++"}
//     ]
// }
// ]


//Maping array
// let studentCopy=student.map(element => element.name)
// console.log(studentCopy);



//Filter() in array

// const num=[1,2,3,4,5,6,7,8,9]
// const evenNumber=num.filter(num=> num%2==0)
// console.log(evenNumber);


//Practice
// let display = () =>{console.log("This is an Arrow Function")}
// display()

let student=[
{name:"khan",
    fatherName:"Ali",
    class:5,
    course:[
        {name:"CIT"},
        {name:"WEB"}
    ]
},
{name:"Mujeeb",
    fatherName:"ahmad",
    class:6,
    course:[
        {name:"MERN"},
        {name:"DEV"}
    ]
},
{name:"arshad",
    fatherName:"mustafa",
    class:7,
    course:[
        {name:"JAVA"},
        {name:"C++"}
    ]
}
]

let studentcopy=student.map(element=>element.course)
console.log(studentcopy);

// let num=[1,2,3,4,5,6,7,8,9,0]
// let even=num.filter(num=> num%2==0)
// console.log(even);

// let studentFilter=student.filter(element=>element="ahmad")
// console.log(studentFilter);