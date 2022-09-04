const uid = "123abc";  //string
let firstName = "Nidhin";  //string
let lastName = "M";   //string
let email = "ndn1999nm";   //string
const password = "Password";  //string
var constCount = 1 ; //number
var contry = "India";  //string
var state = "Kerala";  //string
var isLoggedInWithGoogle = false ;  //boolien
var isLoggedInWithFacebook = true ;  //boolien
  

// this will display all values in terminal
// this way of diplaying is called interpolation

console.log(` 
    With Uniq ID: ${uid}
    User is : ${firstName} ${lastName}
    and his email is : ${email}
    and uses the password : ${password}
    logged in count : ${constCount};
    from Contry : ${contry};
    from State : ${state};
    logged in with google : ${isLoggedInWithGoogle};
    loogged in with facebook : ${isLoggedInWithFacebook};

    

`)