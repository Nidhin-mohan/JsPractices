var  User = { 
    name : "",
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
    },
};

var hitesh = Object.create(User);
console.log(hitesh);


var sam = Object.create(User,{
    name : { value : "sammy"},
    courseCount : { value : 3},
});

sam.getUserName();