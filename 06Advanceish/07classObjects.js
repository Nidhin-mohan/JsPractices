// import User from "./06classes";


const User = require ("./06classes.js")

const hitesh = new User("Nidhin","Mohan");

console.log(hitesh.getInfo());

hitesh.enrollCourse("react");
hitesh.enrollCourse("Angular");

console.log(hitesh.getCourseList());


let courses = hitesh.getCourseList();
courses.forEach(c => console.log(c))

let couseCount = courses.length;
