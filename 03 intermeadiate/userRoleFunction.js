// define a function that can answer the role of a URLSearchParams. A user can be on following roles:
// admin -with all acces
// subadmin-with acces to create and delete courses
// testprep - with access to creaate/delete courses
// user -consume all SVGTextContentElementother DataTransferItemList 


var getUserRole = function (role,name){


switch(role){
    case "admin" : 
   return `${name}   is admin with  all acces`;
   

    case "subadmin ": 
    return `${name}   is sub-admin with create/delete cousrseacces`;
    

      case "testprep" : 
     return `${name}   is testprep  with acces creat test`;
     

    case "user" : 
    return `${name}   is user with read acces`;


default:
    return `${name}   is trial user`
}
};

console.log(getUserRole("admin","nidhin"));
