// var  value = Math.max(1, 2, 3, 4, 4, 3, 9, 4,5);
// console.log(value);
//  console.log();
//   var myobj = {};
//    Object.assign(myobj,{ a: 1, b : 2, c: 3}, {z:9, y: 8, x : 7});
//    console.log(myobj);


function sumOne(a,b){
    return a+b;
}

let  myar = [1,3,5];

// console.log(sumOne(myar));


// spread operator- in here spread operator spit the my arr and pasiing values one by one
// console.log(sumOne(...myar));  


 function sumTwo(a,b, ...args) {
    console.log(args);
    let mul = a*b;
    let sum =0;
    for (const arg of args){
        sum = sum+arg;

    }
    return [sum,mul];
 }

 // in rest operators if there is argument more thann parameters they will take rest of  those argument together

console.log(sumTwo(2,3,4,5,6,7,));