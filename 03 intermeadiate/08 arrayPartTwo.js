function isEven(element){
    // if (element % 2 === 0) {
    //     return true;
    // }
    return element % 2== 0;// this will check the abouve condition is easy code
}
console.log(isEven(3));



// arrow functions

var isEven = (element) => {
    return element % 2 == 0;
}

console.log(isEven(3));


var result = [2,4,1,8].every(isEven);   // every keyword will check for each elment and return true if all elements will satisfy the condition elsee it will return false

console.log(result);


// callbackfunction

console.log("callbackfunction");

var result = [2, 4, 1, 8].every((e) => (e % 2 === 0)); 


console.log(result);
 var result = [2, 4 ,6].every((e) => (e % 2 === 0));

 console.log(result);