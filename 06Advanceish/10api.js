fetch("https://api.chucknorris.io/jokes/random")
  
.then((response) => {
    return response.json();
})

.then((data) => {
    // console.log("DATA" + data);
    var joke = data.value

    console.log("joek:", joke);
})

  .catch();

