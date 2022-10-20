let myHeros = ["thor", "spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function (){
        console.log('spidy power');
    },
};

// addding a function to myHeros via object ,  prototype

Object.prototype.hitesh = function(){
    console.log('Hitesh is added ');
}


console.log(myHeros.hitesh());

// addding a new method to existing array method

Array.prototype.heyArray = function(){
    console.log(` length of array is ${this.length}`);
}

console.log(myHeros.heyArray());


//nprototype inheritance

const User = {
    name : "top name",
    email: "abc@gmail.com"
}

const Teacher = {
    makeVideos:true,
}

const Teachingsupport = {
    isavalible: true 
}
//  Teacher.__proto__ = User
// Teacher.prototype = User
 

// adding property from user to teacher
Object.setPrototypeOf(Teacher,User)

 console.log(Teacher.name);


 // adding property of techer and useer to teaching support

Object.setPrototypeOf(Teachingsupport,Teacher);
console.log(Teachingsupport.name);