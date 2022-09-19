// // arrays 

// //creating an array 

// const names = [ "Nidhin", "Manu", "Das", "Veer", "Jithu"];

// console.log(names);

// // creating an using new  operator and array constructor

// const cars = new Array("BMW", "AUDI" ,"SIDAN", "BENS"  )
// console.log(cars);

// // finding array lenghth
// console.log(cars.length);

// // accesing element at 2 index 

// console.log(cars[2]);

// // creating an array using  Array.of()

// const random = Array.of("BMW", 2, true, "BENS");
// console.log(random);
// console.log(random[1]);

// let test = random[1];
// console.log(typeof random[1]);


// // Array methods

// // some

// let num1 = [ 1, 2 , 4, 5, 9].some( n => n > 5);
// let num2 = [ 1, 2 , 4, 5, 9].some (n => n < 0);

// console.log(num1);
// console.log(num2);

// let num3 = [ 1, 3, 5, 9, 8].every(n => n % 2 === 0);
// let num4 = [ 2, 4, 6, 8, 10].every(n => n % 2 === 0);

 
// console.log(num3);
// console.log(num4);


// // reduce();

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;


// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

 
// // map()
// // map method will itrate thought the whole array and do operation and store the result replacing the old value
// const num = [ 1, 2, 3, 4, 5].map((a) => a*2);

// console.log(num);//[ 2, 4, 6, 8, 10 ]

// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

 
// // map()
// // map method will itrate thought the whole array and do operation and store the result replacing the old value
// const nume = [ 1, 2, 3, 4, 5].map((a) => a*2);

// console.log(num);//[ 2, 4, 6, 8, 10 ]



//flat

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));

// filter()

let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];

function IsEven(num){
    if(num % 2 === 0){
        return true;
    }
    
}

console.log(num5.filter(value => IsEven(value)));

// fill()

// fill with 0 from position 2 until position 4

console.log(num5.fill("empty",2,4)); // [ 1, 2, 'empty', 'empty', 5, 6, 7, 8 ]

// length

console.log(num5.length);

// pop

console.log(num5.pop());

// unshift();

console.log(num5.unshift("added", "added1"))
console.log(num5);

// shift();

console.log(num5.shift());

// indexof()

console.log(num5);
console.log(num5.indexOf("empty"));

// from

console.log(Array.from("Nidhin"))


// slice

const newArray = [ 1, 2, 3, 4, 5, 6];
console.log(newArray.slice(2,5)); // [ 3, 4, 5 ]

//splice

console.log(newArray.splice(1,2,"hi","hey"));

console.log(newArray);

//for each
const newArray1= [1, 2, 3, 4, 5, 6];
newArray1.forEach(value => console.log(value*2));


// findindex
function equal(value){
  if(value === 55){
    return value;
  }
}

console.log(newArray1.findIndex(equal));

// find

function equal(value) {
  if (value === 55
    ) {
    return value;
  }
}

console.log(newArray1.find(equal));

// sort

const array2 = [ 3, 5, 1, 10, 4,3];

console.log(array2.sort())

const fruits = [ "apple", "mango", "pineaple", "lemon", "grape"]
 console.log(fruits.sort());


//  concat();

const numbers = [ 1, 2, 3, 4];
const alpha = [ "a", "b", "c","d"];


console.log(numbers.concat(alpha));


// includes()
// checking for whether z is present in alpha

console.log(alpha.includes("a"));

// reverse()

 console.log(numbers.reverse());

//  flatmap()

const array = [[1], [2], [3], [4], [5]];

const a = array.flatMap((arr) => arr * 10);
console.log("flatMap", a);

 
