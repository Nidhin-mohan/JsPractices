const hitesh = {
    firstName : "hitesh",
    lastName : "choudhary",
    role : "admin",
    courseCount : 3,
    getInfo : function(){
        console.log(` First name is ${this.firstName}  
        Last name is ${this.lastName}
        his role is ${this.role}


        and  he is studying  ${this.courseCount}
        `);

    },
}


const dj = {
     firstName : "rock"
     , lastName : "Dj"
     , role : "sub-admin",
     courseCount : 4,
};

// hitesh.getInfo();

// dj.getInfo();

hitesh.getInfo.bind(dj)();