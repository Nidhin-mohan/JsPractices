const courses = [
    {
        name : "Complete reactJs course",
        price:  "2.3"
    },

     {
        name : "Complete angular course",
        price:  "2.1"
    },

     {
        name : "Complete Mern  course",
        price:  "2.7"
    },

     {
        name : "Complete c++ course",
        price:  "2.8"
    },
]


function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course)=> {

        const li = document.createElement("li")
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)

        li.appendChild(name);



        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price);


        li.appendChild(span);
        ul.appendChild(li);
    });
}

generateList();

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a,b)  => a.price - b.price)
    generateList();

})


//asignment part

let button2 = document.createElement("button");
button2.className =
  "btn-primary btn btn-lg mt-4 mx-auto d-block sort-btn2";
button2.textContent = "Sort courses"

const container = document.querySelector(".container")
container.appendChild(button2);

button2.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  courses.reverse()
  generateList();
  
});







// const button = document.querySelector("sort-btn");

// button.addEventListener("click", ()  => {
//     courses.sort((a, b) => a.price - b.price);
//    generateList();
// })


