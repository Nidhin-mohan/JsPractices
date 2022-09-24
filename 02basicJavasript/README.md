# Javascript

## Js engines
- V8

V8 engine is the backbone of Google Chrome and other Chromium-based web browsers. V8 engine is distinct from other JS engines as it directly converts scripts to machine code without producing intermediate code.

- spidermonkey


SpiderMonkey is the JavaScript and WebAssembly implementation library of the Mozilla Firefox web browser. The implementation behaviour is defined by the ECMAScript and WebAssembly specifications.

## Node.js

Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript

## Variables

Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. Use the reserved keyword var to declare
Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. Use the reserved keyword var to declare a variable in JavaScript. a variable in JavaScript.
also let and cost.

there are variables like numbers,string,boolien,undefined etc.


 ### var

The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

### let

The let declaration declares a block-scoped local variable, optionally initializing it to a value.

### const

Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.


## operators

There are following types of operators in JavaScript.

### Arithmetic Operators

- addition (+)
- subtraction (−)
- multiplication (*)
- division (/)
- exponentiation (^)

### Comparison (Relational) Operators

- ==	equal to
- ===	equal value and equal type
- !=	not equal
- !==	not equal value or not equal type
- >	greater than
- <	less than
- >=	greater than or equal to
- <=	less than or equal to


### Bitwise Operators

- &	AND
- |	OR
- ^	XOR
- ~	NOT
- <<	Zero fill left shift
- \>>	Signed right shift
- \>>>	Zero fill right shift


### Logical Operators


### Assignment Operators


### Special Operators



# conditional Statements

## if...else statements

syntax

```
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}


```


Also can use ``` else``` if to check more conditions

## Logical operators: AND, OR and NOT


- && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
- || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.


## switch statements

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

## ternary operators

synatax


```condition ? exprIfTrue : exprIfFalse```


## Coercion in JavaScript 

1. String to Number Conversion: When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly. When the string ‘Rahul’ is added to the number 10 then JavaScript does not give an error. It converts the number 10 to string ’10’ using coercion and then concatenates both the strings. Some more examples are shown below.

 ## FALSY VALUE AND TRUTHY VALUES

 In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

 