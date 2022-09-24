// create an applicationn with following roles:
// admin -get full acces 
// subadmin - gets acces to create/ delete courses
// testprep - get acces to creat/delete tests 
// user - gets acces to consume content 


var user =  "user";


switch(user){
    case "admin" : {
    console.log("all access alowed");
    break;
}
    case "subadmin ": {
    console.log("gets acces to create/ delete courses");
     break;
}
      case "testprep" : {
    console.log("get acces to creat/delete tests ");
     break;
}
    case "user" : {
    console.log("gets acces to consume content ");
     break;
}
}