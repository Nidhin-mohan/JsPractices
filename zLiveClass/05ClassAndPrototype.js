//Class

class UserOne {

constructor(firstName, lastName,email,score){
  this.firstName = firstName;
 this.lastName = lastName;
 this.email = email;
 this.score = score;
}

getFullName(){
    return ` ${this.firstName}  ${this.lastName} ${this.email}`;
}
get getScore(){
     return this.score;
}

set sScore(score){
    this.score = score;
}



//    talk() {
//     console.log('talk method');
//     return "test";
//    }
}

// let person1 = new User("nidhin", "Mohan", "ndnn129u3@gmain");
// let person2 = new User("Nikhil", "Mohan");

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// console.log(person1.getScore);
// person1.sScore = 5;
// console.log(person1.getScore);


//Inheritance

 class UserTwo extends UserOne{
// inheriting all props of user one

getFullName(){
    const fullname = this.firstName + this.lastName;
    return fullname;
}

}

let newObject = new UserTwo("nidhin", "Mohan", "ndnn129u3@gmain");

// console.log(newObject.getFullName());

let userName = function(name, count){
    this.name = name;
    this.count = count;
    this.getcourseCount = function () {
        console.log(`The course is ${this.count}`);
        return 454 ;
    };
    return;
};

userName.prototype.getName = function () {
    console.log(`The user name is ${this.name}`);
    return;
};


let userOne = new userName("Nidhin", 5);
 let a = userOne.getcourseCount()
console.log(a);



// prototypal Inheritance


let ObjOne = {
    fullname : "Nidhin",
    add : "Kerala",
    getName : function(){
        console.log(this.fullname + this.add);
        return;
    },

};

let ObjTwo = {
    fullname : "Nikil",
};

ObjTwo.__proto__ = ObjOne;

console.log(ObjTwo.getName());



