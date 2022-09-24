var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.courseCount}`);

    };
};

User.prototype.getFirstname = function (){
    console.log(`Your first Name is: ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);

// console.log(hitesh);

var sam = new User ("Sam",1);
// console.log(sam);

hitesh.getCourseCount();
hitesh.getFirstname();
 

sam.getCourseCount();
sam.getFirstname();