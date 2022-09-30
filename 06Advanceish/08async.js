const uno  = () =>{
    console.log('I am one');
}


const dos = () => {
    setTimeout(() => {
        console.log('wohooo');
    },3000)
  console.log("I am twoe");
};

const tres = () => {
  console.log("I am three");
};

uno();
dos();
tres();