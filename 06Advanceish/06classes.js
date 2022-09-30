class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  enrollCourse(name) {
    this.#courseList.push(name);
  }

  getCourseList() {
    return this.#courseList;
  }

   login() {
    return "You are logged in";
  }
}



class SubAdmin extends User {

  constructor(name,email){
    super(name, email);
  }

  getAdminInfo (){
    return " I am subAdmin";
  }

  login(){
    return "I am from subAdmin";
  }
  adminlogin(){
    super().login()
  }

}


const tom = new SubAdmin("tom", "tom@gamil");


console.log(tom.getAdminInfo());
console.log(User.login.call());



console.log(tom.prototype.login.call());


console.log(tom.getInfo());



// console.log(Super.prototype.display.call(childObject));












module.exports =User;


Nidhin = new User("Nidin", "nidin.com");


// console.log(Nidhin.getInfo());

Nidhin.enrollCourse("react");
// console.log(Nidhin.courseList);  ///  normal 

// console.log(Nidhin.getCourseList());
