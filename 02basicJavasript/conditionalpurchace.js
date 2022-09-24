//user is allowed to purchase if logged in email verrified cardInfo-valid  else stop purchase



var isLoggedIn = true;
var isEmailVarified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("User is loggedIn");

// //work only isloggedIn is true

// }

// if(isEmailVarified){
//        console.log("Users email is varified");

//        // work only when isEmailVarified is true
// }
// if(cardInfo){
//        console.log("Card info is available");
//        // work only when cardinfo is true


// }

// we can also use AND && , OR || 
if(isLoggedIn&& isEmailVarified&& cardInfo){
       console.log("You can purcchase ");
}
else{
       console.log("you are not allowed to purchse");
}