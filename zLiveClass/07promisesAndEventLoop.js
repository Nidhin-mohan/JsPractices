
//event loop

// const UserOne = () => {
//     console.log('I am user one');

// };

// const UserTwo = () => {
//   setTimeout(() => {
//     console.log('i am from two with 2s');
//   },2000)
//   console.log("I am user Two");
// };

// const UserThree = () => {
//   console.log("I am user Three");
// };

// UserOne();
// UserTwo();
// UserThree();

//promise(callback , promise con(then , catch), async await)
// -pending
// - fullfilled(resolve)
// -reject

const MakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrOne = ["userOne", "userTwo", "userThree"];
    if (arrOne.length < 0){
      resolve("User found");

    }else {
      reject("No found");
    }
    
  }, 2500);
});


MakePromise.then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);

})


// Async and await

const UserOne = () => {
  return "I am userOne";
}
const UserTwo = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve ("user Found");
      
    }, 1500);
  });
}

const UserThree = () => {
  return "I am UserTwo"
}


const wait = async  () => {
  let GuestOne = UserOne();
  console.log(GuestOne);

   let GuestTwo = await UserTwo();
   console.log(GuestTwo);

    let GuestThree = UserThree();
    console.log(GuestThree);
};

wait();


