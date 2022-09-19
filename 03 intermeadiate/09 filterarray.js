var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// console.log(testArray.fill("empty"));

// fill key word repalce all elements with empty(the value which is passed).

// filter

const myNumber = [23, 45, 54, 66, 77, 33, 55, 53];

const result = myNumber.filter((num) => num % 2 === 0);

// filter will return the element of an array which meets the contion specified in the call back function


console.log(result);


var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "sod" ];

// console.log(users.slice(1,5));

//slice will slice the values 1 to 5 (that means it will give out put only of 1-4)

console.log(users);

users.splice(1, 3,"hi","two","three","check");
console.log(users);


//splice will delete the valiue from 1-to count (3 values)and add it with vales which is given after  count