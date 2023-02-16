// console.log("Hello world");

// const myObj = {
//   name: "Evans",
//   age: 30,
//   city: "New York",
// };

// document.getElementById("demo").innerHTML("") = myObj.name;

// A P I

const fetchData = () => {
  const listEl = document.querySelector("ul");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //   console.log(res);
      return res.json();
    })
    .then((data) => {
      data.forEach((post) => {
        listEl.insertAdjacentHTML("beforeend", `<h1>${post.name}</h1>`);
        listEl.insertAdjacentHTML("beforeend", `<p>${post.email}</p>`);
      });

      //   console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

fetchData();
