
// string to number 

let  anum = "25";
let num = Number(anum);
// console.log('anum' , anum);
// console.log('num', num);

// console.log(typeof anum);
// console.log(typeof num);

//number to String

let str = 5;
let strn = String(str)
// console.log(typeof str);
// console.log(typeof strn);

//Destructuring and spread , rest

let value  = [ 2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, bodytemp, boil, chek] = value;

// console.log(chek);

let fullstack = [
    ["html", "css", "js", "tailwind"],
    ["nodejs", "node", "mongo"]
];

let [frontend,backend] = fullstack;
// console.log(backend);

let array1 = [1, 2, 3, 4, 5];
let [a, , b, , c] =array1;
// console.log(c);

let [h, f,...rest] = array1;
// console.log(rest);

// spread rest 


//spread
function sum(x,y){
    return x+y
}
let vari = [3, 6];
// console.log(sum(...vari));


//rest

  function sumtwo(...args){
    console.log(args);
    let sum =0;
    for(let a of args){
        sum = sum+a;
    }
    return sum
  }

//   console.log(sumtwo(1,2,3,4,5,5));

  //New keyword

  let person = {
    name : "nidhin",

  };
//   console.log(person);

let person1 = new Object ();

person1.name = "HI htere";

// console.log(person1);

// Set and Map

let z  = [1,2, 3, 1, 2, 3, 4, 1,2 , 3, 5 , 12, 4,];

let nums = new Set(z);
// console.log(nums);

for( let i of nums){
    // console.log(i);
}

//Map

  //getter setter

  let newMap = new Map();

//   console.log(newMap);

  newMap.set(1, "first value");
  newMap.set("1", "second");
  newMap.set(true, "booli");

//   console.log(newMap);

for ( let key of newMap.values()){
    // console.log(key);
}


//closure

function outer (){
    let variable = "Seven";
    function inner(){
        console.log(variable);
    }
  return  inner();

}

let h1 =outer();

h1