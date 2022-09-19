# Functions

a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.


## Function declarations
A function definition (also called a function declaration, or function statement) consists of the function keyword, function name paranthesis brakets


```
function square(number) {
  return number * number;
}
```

## Function expressions

The function keyword can be used to define a function inside an expression.

There is another syntax for creating a function that is called a Function Expression.

```
let sayHi = function() {
  alert( "Hello" );
};
```

## Calling functions

Calling the function actually performs the specified actions with the indicated parameters.

```
square(5);

console.log(square(5));
// …
function square(n) {
  return n * n;
}

```

## Function scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

## Scope and the function stack

#### Recursion

A function can refer to and call itself. There are three ways for a function to refer to itself:

A function that calls itself is called a recursive function.

## Closures

JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

A closure is created when the inner function is somehow made available to any scope outside the outer function.

## context

Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code or the function where it's looked at. We know that window is a global object in the browser so if we type this in the console and it should return window object

## Hoisting

Hoisting allows functions to be safely used in code before they are declared.


### Function hoisting

```
catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/

```

### Variable hoisting

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.
```
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.

```

# Arrays

The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

```
Array()
```

- JavaScript arrays are resizable and can contain a mix of different data types.
- arrays are zero-indexed


creating an array

```
const names = [ "Nidhin", "Manu", "Das", "Veer", "Jithu"];


// creating an using new  operator and array constructor

const cars = new Array("BMW", "AUDI" ,"SIDAN", "BENS"  )
console.log(cars);

// finding array lenghth
console.log(cars.length);

// accesing element at 2 index 

console.log(cars[2]);

// creating an array using  Array.of()

const random = Array.of("BMW", 2, true, "BENS");
console.log(random);
console.log(random[1]);

```

## Array methods and properties

- some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```

let num1 = [ 1, 2 , 4, 5, 9].some( n => n > 5);
let num2 = [ 1, 2 , 4, 5, 9].some (n => n < 0);

console.log(num1); // true
console.log(num2); // false
```

- every()

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```
let num3 = [ 1, 3, 5, 9, 8].every(n => n % 2 === 0);
let num4 = [ 2, 4, 6, 8, 10].every(n => n % 2 === 0);

 
console.log(num3); //false
console.log(num4); // true
 
```

- Reduce 

 It has several uses, like summing all the values of an array or in an object array, counting for particular items in the array, grouping objects, merging arrays contained in an array of objects, removing duplicates, etc.

 ```
 const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

 ```

 - map();

 The map() method creates a new array with the results of calling the provided function on each array element.



```
// map method will itrate thought the whole array and do operation and store the result replacing the old value
const num = [ 1, 2, 3, 4, 5].map((a) => a*2);

console.log(num);//[ 2, 4, 6, 8, 10 ]
`
```

- flat()

The flat() method creates a new array with all sub-array elements concatenated recursively up to the specified depth. The default depth is one.

Examples:


```
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());// [1, 2, 3, 4, [5, 6]]
 
const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));//  [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```


- filter()

The filter() method creates a new array with all elements that pass the given test implemented by the provided function.

The filter() method does not mutate the original array but returns a new one.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];

function IsEven(num){
    if(num % 2 === 0){
        return num;
    }
    
}

console.log(num5.filter(value => IsEven(value)));// [ 2, 4, 6, 8 ]
```

- fill

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];


// fill with empty from position 2 until position 4

console.log(num5.fill("empty",2,4)); // [ 1, 2, 'empty', 'empty', 5, 6, 7, 8 ]
```

- length

The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];

// length

console.log(num5.length);  //8

```
- pop()

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];
console.log(num5.pop()); // 8
```

- unshift()

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];

// unshift();

console.log(num5.unshift("added", "added1")); //10
```


- shift()

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

```
let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];

console.log(num5.shift()); //1
```

- indexOf()

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```

let num5 = [ 1, 2, 3, 4, 5, 6, 7, 8];


console.log(num5.indexOf(3)); // 2 
````

- from()

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. this will convert the array into string

```
// from

console.log(Array.from("Nidhin")) //[ 'N', 'i', 'd', 'h', 'i', 'n' ]
```

- slice

The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

```
// slice

const newArray = [ 1, 2, 3, 4, 5, 6];
console.log(newArray.slice(2,5)); // [ 3, 4, 5 ];

```

- splice


The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

```
const newArray = [ 1, 2, 3, 4, 5, 6];

console.log(newArray.splice(1,2,"hi","hey")); // [ 2, 3 ]

console.log(newArray); // [ 1, 'hi', 'hey', 4, 5, 6 ]
```



-  forEach()

The forEach() method executes the provided function once for all the elements in the array. It differs from the map() method because it does not create a new array.

```
//for each
const newArray1= [1, 2, 3, 4, 5, 6];
newArray1.forEach(value => console.log(value*2));

//anser
2
4
6
8
10
12

```

-  findIndex()

The findIndex() method returns the index of the first element in an array that satisfies a given test function. Otherwise, it returns -1. Unlike other methods, findIndex() will execute the given function even for indexes with unassigned values.

```
// findindex

const newArray1= [1, 2, 3, 4, 5, 6];
function equal(value){
  if(value === 5){
    return value;
  }
}

console.log(newArray1.findIndex(equal));//output - 4
//if we changed the value to be chekked to a vlaue which is not given in the array output will be -1

```

- find()

The find() method returns the value of the first element in an array that satisfies a given test function. Otherwise, it returns undefined. Note the difference with findIndex(), where the element’s index is returned instead of the value.

```
// find

const newArray1= [1, 2, 3, 4, 5, 6];
function equal(value){
  if(value === 5){
    return value;
  }
}

console.log(newArray1.findIndex(equal));//output- 5
//if we changed the value to be chekked to a vlaue which is not given in the array output will be undefined

```

- sort()

The sort() method returns a new sorted array with the elements sorted in ascending order. When called with no arguments, the array is sorted alphabetically by converting each element to a string and comparing these strings using Unicode code point value.

```
// sort

const array2 = [ 3, 5, 1, 0, 4, 3];

console.log(array2.sort()) // output  [ 0, 1, 3, 3, 4, 5 ]

```

```
const numbers = [4, 2, 5, 1, 3]
numbers.sort((a, b) => a - b)
console.log(numbers)

---------
Output
---------
> (5) [1, 2, 3, 4, 5]
```

```
const fruits = [ "apple", "mango", "pineaple", "lemon", "grape"]
 console.log(fruits.sort()); 
  //  output   [ 'apple', 'grape', 'lemon', 'mango', 'pineaple' ]
 ```

 - concat()

The concat() method merges two or more arrays into a single javascript array. This method does not alter the original but returns a new array instance containing all the elements from both arrays.

```
//  concat();

const numbers = [ 1, 2, 3, 4];
const alpha = [ "a", "b", "c","d"];


console.log(numbers.concat(alpha));

//output

[
  1,   2,   3,   4,
  'a', 'b', 'c', 'd'
]

```

- includes()

The includes() method returns true or false depending on whether a given value is present among the array elements. It is similar to the indexOf() method, but instead of returning the index, it returns just a boolean indicating its presence in the array.
Note that includes is case-sensitive when dealing with strings.

```
// includes()
// checking for whether a is present in alpha

const alpha = [ "a", "b", "c","d"];

console.log(alpha.includes("a"));

//output true
```
- reverse()

The reverse() method reverses an array in place. By reversing, we mean that the function will transpose the elements of the array. The first element will become the last, and the last the first element.

```
const numbers = [ 1, 2, 3, 4];
 console.log(numbers.reverse());

 //output  [ 4, 3, 2, 1 ]
```

- flatMap()

The flatMap() method applies a function to each array element and then flattens the result into an array. It combines flat() and map() in one function.

```
const array = [[1], [2], [3], [4], [5]];

const a = array.flatMap((arr) => arr * 10);
console.log("flatMap", a);

//flatMap  [10, 20, 30, 40, 50]
```

