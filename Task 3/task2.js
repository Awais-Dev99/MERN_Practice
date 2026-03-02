//sum of numbers using reduce function
const numb=[5,8,3,5,6,7];
const sum=numb.reduce((add , num)=>{
    return add+num;
})
console.log(sum);

//add new element in array
numb.push(8);
console.log(numb);

//remove first element from the array
const num=[2,4,5,6,3];
num.shift();
console.log(num);

//reversing the array
const nu=[2,4,5,6,3];
nu.reverse();
console.log(nu);

//check a number in the array
const n=[2,5,4,3,6,9]
const find=9;
const result=n.filter(n=>n==find);
if(result.length>0){
    che=true;
    console.log("number exist",che);
}
else{
    chr=false;
    console.log("number not exist",che);
}

//create a new array multiplied by 2
const first=[2,5,4,3,6]
const multiplied=first.map(first=>first*2)
console.log(multiplied);

//use filter to find all numbers greater than 3
const fin=[2,1,3,5,4,3,2,6,7,8,9]
const grea=fin.filter(fin=>fin>5);
console.log(grea);

//find the numbers divisible by 2
const fi=[9,1,3,5,4,3,2,6,7,8,9]
const divi=fi.find(fi=>fi%2==0);
console.log(divi);
