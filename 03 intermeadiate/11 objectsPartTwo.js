// methods

var user = {
  firstName: "Nidhin",
  lastName: "Moahn",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],

  //method 
  buyCourse: function (couseName) {

    this.courseList.push(couseName);

    // this is key word which reffered to user like this.something = this.use

  },

  getCourseCount: function (){
    return `${this.firstName} is enrolled in total of ${this.courseList.length}`
  },
  info: function (){
    return `${this.firstName} ${this.lastName}  ${this.role} ${this.loginCount} ${this.facebookSignedIn} ${this.courseList} course cout ${this.courseList.length}`;

  }


}

var courseList = true;

console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("React Js course");
user.buyCourse("Angular course");

console.log(user.getCourseCount());
console.log(user.courseList);
console.table(user.info()); 
console.log(user.info());
