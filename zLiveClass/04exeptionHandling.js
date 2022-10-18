//Exeption handling
//try catch finaly

try {
    let firstName = "nidhin";
    console.log(firstName,'', lastname);
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log('Completed');
}


//hoisting


console.log(name);
sum();

var name = 'nishin';
function sum(){
    console.log('hi there');
}
