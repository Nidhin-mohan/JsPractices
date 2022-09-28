// function init() {
//   var firstName = "hitesh";
//   function sayFirstName() {
//     console.log(firstName);
//   }

//   return sayFirstName();
// }

//   var  value = init();



function doAdition (x){
    return function (y){
        return x+y;
    }

}

var add5 = doAdition(4);
 console.log(add5(5))


 console.log( doAdition(70)(1))

//curring

