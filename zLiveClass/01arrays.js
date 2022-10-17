// for of

const names = ["Nidhin", "Mohan", "Nikhil", "Manu"];
const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers){
//     console.log(number * 5);
// }.

for (let name of names){
    console.log(name.length);
}

functionn without parameter

function sqr (){
    let a = 5
    let b= a*a;
    console.log('SQURE',b );
}
 
sqr();

function with parameter

function sqr (a,b){
    let  x = a;
    let y= b;
    let sum = x+y;
    return sum;
}
 
let x = sqr(3,5);
console.log('sum',8);


arrow function

let num = [1,2,3,4,5];
let num1 = [1, 2, 3, 4, 5];

const SumOfAll = (...args) => {
    let sums = 0;
    for(let num of args){
    sums = sums + num;
    }
     console.log(sums);
} 
 SumOfAll(...num);


//Date object

let now = new Date();



console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.toString());
console.log(now.toDateString());



