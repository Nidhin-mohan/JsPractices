var user = {
    firstName : "Nidhin",
    lastName : "Moahn",
    role: "Admin",
    loginCount : 32,
    facebookSignedIn: true
}

// accessing the value

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);

// changing the value

user.loginCount = 5;
console.log(user.loginCount);



console.table(user);