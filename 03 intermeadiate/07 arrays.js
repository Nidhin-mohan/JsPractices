
var countries =  ["India", "jappan", "usa", "rusia"];

var states = new Array("Rajestan", "delhi","Mubai", "assam");

// console.log(countries[1]);

states[0]= "kerala";

// console.log(states)


var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
// console.log(user);


// pop() will delete the last Element from the array

user.pop();
user.pop();
// console.log(user);

// unshift() will add New value to the starting of array

user.unshift("New Value");
// console.log(user);


//shift() will deltete the first element of an array;

user.shift();
// console.log(user);


// indexOf will check for the value position in the array and if its not present it will return -1;

console.log(user.indexOf(3));


// .from( ) will convert the value into string
console.log(Array.from("hitesh")); 

//[ 'h', 'i', 't', 'e', 's', 'h' ]

