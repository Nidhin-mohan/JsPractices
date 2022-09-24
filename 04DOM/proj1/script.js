var counter = document.getElementById("counter");
var followers = document.getElementById("followers");
let count = 1;

setInterval( () => {
   if (count< 1000)
   {
     count++;
     counter.innerText = count;
   }

}, 1);

setTimeout( () => {
    followers.innerText = "Followers in Instagram!";
   
}, 4000);



