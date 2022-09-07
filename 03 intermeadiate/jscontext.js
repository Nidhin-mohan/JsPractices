// sayHello();

// function sayHello(){
//     console.log("Hello");

// }
  

// learning about context 

if (2 === "2") {
  console.log("This is true");
}

var myName = "hitesh";

// this window statement is only work in browser becouse the global context is not avilable in node
if (myName === window.myName) {
  console.log("This is again a true statement");
}