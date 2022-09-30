const btn = document.getElementById("button");
// selecting elment button with id button to btn

// random color generator
const randomColor = () => {
let val = "0123456789ABCDEF";
  let cons = "#";
for (let i = 0; i < 6; i++){
  cons = cons + val[Math.floor(Math.random() * 16)];
}
return cons;


}


// console.log(randomColor());

//  adding color to the body   when the ChangeRandom color is called 
function ChangeRandomColor(){
// set interval will continue to call function random color one 200ms intervals

  setInterval(() => {document.body.style.backgroundColor = randomColor();}, 200)

}

//on click on the button function changeRandomcolor is called
btn.addEventListener("click", ChangeRandomColor);































// const btn = document.getElementById("button");

// const randomColor = () => {
//   let val = "0123456789ABCDEF";
//   let cons = "#";

//   for (let i = 0; i < 6; i++) {
//     cons = cons + val[Math.floor(Math.random() * 16)];
//   }
//   return cons;
// };
// console.log(randomColor());

// function changeRandomColor() {
//   document.body.style.backgroundColor = randomColor();
// }
// btn.addEventListener("click", changeRandomColor);
