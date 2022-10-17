//Objects

let userDetails ={
    firstName : "Nidhin",
    lastName : "Mohan",
    role : "admin",
    logimCount : 25,

};



console.log(userDetails.firstName);
console.log(userDetails["lastName"]); // u can also call in this way but not used 
console.log(userDetails);

userDetails.logimCount = 5;
console.log(userDetails.logimCount);



//miniprogram

let userDetailsCourse = {
  firstName: "Nidhin",
    lastName : "Mohan",
    role : "role",
    courseList : [],

    buyCourse : function (coursename){
        this.courseList.push(coursename);

    },

    getCourseCount : function(){
        return `${this.firstName } ${this.lastName} bought ${this.courseList.length}  including ${this.courseList} `
    }
};

// console.log(userDetailsCourse.firstName);
// userDetailsCourse.buyCourse("React course");
// console.log(userDetailsCourse.courseList);
// console.log(userDetailsCourse.getCourseCount());

// console.log(userDetailsCourse.hasOwnProperty("firstName"));

//for in loop 

for (let x in userDetailsCourse){
    console.log(x);
    // console.log(userDetailsCourse[x]);
}

//for of loop 

let b = [1,2,3,4,5]

for (let x of b){
console.log(x);
}


//Higher order function
// call back function

let isEven = (e) => {
    return e % 2 == 0;
}

let value = [2, 4, 5, 8].every(isEven());
console.log(value);


//miniprogram
// Function to squre
// it will  mul squre with num


let squre = (e) => {
    return e*e;
}
let mul = (e) => {
    return squre(e)*e
}

let ans = mul(2);
console.log(ans);


setTimeout(hi, 3000);
function hi(){
    console.log('hit me');
}

setTimeout(() => {
    console.log('HI THERE');
}, 2000);


setTimeout(hi, 3000);
setTimeout(() => {
    console.log('settimeout');
},1000);


let Arr = [ "hey", "hello", "hola", "Namste"];

Arr.forEach((val) => {
    console.log(val);
});

//Map

let numbers = [1, 2, 3, 4, 5, 6];
let store = numbers.map((num) => num*num);
console.log(store);
console.log(numbers);

 let Arr = [ "hey", "hello", "hola", "Namste"];

 let ans = Arr.map((name) => name.toLocaleUpperCase());
 console.log(ans);


//Filter

 let Arr = [ "hey", "hello", "hola", "Namste"];
 let numbers = [1, 2, 3, 4, 5, 6];


  const newarr =Arr.filter((e) => e.includes("l"));
 console.log(Arr);
 console.log(newarr);

//Reduce

let Arr = ["hey", "hello", "hola", "Namste"];
let numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((acc,cur) => acc + cur, 0)
console.log(sum);