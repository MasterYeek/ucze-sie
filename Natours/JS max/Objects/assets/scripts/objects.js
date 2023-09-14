const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";

const userChosenKeyName = "level";

let person = {
  "first name": "Tom",
  age: 30,
  hobbies: ["sports", "cooking"],
  [userChosenKeyName]: "...",
  greet: function () {
    alert("hi there");
  },
  1.5: "hello",
};
delete person.age;
person.isAdmin = true;

const keyname = "first name";

console.log(person[keyname]);
console.log(person[1.5]);
console.log(person["first name"]);
