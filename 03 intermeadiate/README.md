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

