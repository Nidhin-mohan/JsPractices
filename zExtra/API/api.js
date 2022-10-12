// fetch("https://icanhazdadjoke.com/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log("data ", data);
//     var joke = data.value;
//     console.log(joke);
//   })

//   .catch();


fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch();