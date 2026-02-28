//Task 2   Positive Negative or Zero

// let num=10
// if(num<0){
//     console.log("The Number is Negative");
// }
// else if(num==0){
//     console.log("The Number is Zero");
// }
// if(num>0){
//     console.log("The Number is Positive");
// }


//Task 3   Simple Login System

// let userName="admin"
// let password=1234
// if(userName==="admin" && password===1234){
//     console.log("You are Logged In");
// }
// else{
//     console.log("Invalid Credentials");
// }


//Task 3  Electricity Bill

// let units=200
// if(units>0 && units<=100){
//     console.log("Your Consumed ",units," and your total bill is  ",units*10);
// }
// if(units>100 && units<=200){
//     console.log("Your Consumed ",units," and your total bill is  ",units*15);
// }
// if(units>200){
//     console.log("Your Consumed ",units," and your total bill is  ",units*20);
// }


//Task 4  Even Number 1 - 50

// for(let i=1 ; i<=50 ; i++){
//     if(i%2==0){
//         console.log(" ",i," ");
//     }
// }



//Task 5  Reverse Counting
// for(i=20 ; i>=1 ; i--){
//     console.log(" ",i," ");
// }

//Task 6 Factorial

// let fact=1
// for(let i=1 ; i<5 ; i++){
//     fact*=i;
// }
// console.log(fact);




//Task 7

//Task 8 Sum of even numbers from 1 to 100
// let sum=0
// for(let i=1 ; i<=100 ; i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log(sum);


//Task 9 prime  number checker
// let count=0
// let num=10
// for(let i=1 ; i<=num ; i++){
//     if(num%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("The Number is Prime");
// }
// else{
//     console.log("The Number is not prime");
// }



//Task 10 ATM Machine

// let user=100
// let amount=200
// if(amount>user){
//     console.log("Amount deducted");
// }
// else{
//     console.log("Insufficiet Balance");
// }



//Task 11

// let password="Khan123"
// console.log(passwordStrengthChecker("H99lellohello"));

// function passwordStrengthChecker(password){
//     haslowercase=false;
//     hasnumbers=false;
//     if(password.length<8){
//         return "Weak password enter minimun 8 characters"
//     }
//     for(i=0 ; i<=password.length ; i++){
//         let ch=password[i];
//         if(ch>='A' && ch<='Z'){
//             hasuppercase=true
//         }
//         if(ch>='1' && ch<='9'){
//             hasnumbers=true
//         }
        
//     }
//     if(hasuppercase && hasnumbers){
//         console.log("Strong Password");
//     }
//     else{
//         console.log("Weak Password Must contail UpperCase and Numbers");
//     }

    
// }



//Task 12 Fizz and Buzz

// for(let i=0 ; i<=50 ; i++){
//      if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     }
//    else if(i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
    
// }


let name='<h1>Khan</h1>'
document.getElementById("h").innerHTML=name;


document.getElementById("btn").addEventListener("click",function(){
     document.getElementById("btn").style.color="blue";
    console.log("Clicked");
     alert("The Alert is Working Properly")
})



















