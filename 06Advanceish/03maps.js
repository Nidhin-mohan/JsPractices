var myMap = new Map();

myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");



// console.log(myMap.keys());

// for (let key of myMap.keys()){

//     console.log(`key is ${key}`);
// }

// for (let values of myMap.values()) {
//   console.log(`value is ${values}`);
// }

for(let [key,value] of myMap){
    console.log(`key is ${key} value is ${value}`);
}



myMap.forEach((v, k) => console.log(`${v}  and key ${k}`))

myMap.delete(2)
console.log(myMap);