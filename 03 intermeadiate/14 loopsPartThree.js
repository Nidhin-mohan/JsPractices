const names = [
    "Youtube",
    "facebook",
    "Instagram",
    "Netflix",
    "Amason"
]

for (const n of names){
    console.log(n);
}



// for in loops

// its used for objects

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
    lco: "LearnCOdeOnline,in",
};


// to log keys

for (const n in symbols){
    console.log(n);
}

// to log values

for (const n in symbols) {
  console.log(`key is ${n} value is ${symbols[n]}`);
}