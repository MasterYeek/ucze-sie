const button = document.querySelector("button");
// button.onclick = function () {};

const buttonClickHandler = () => {
  alert("Button was clicked ");
};
// button.onclick = buttonClickHandler;

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener(
  "click",
  (event) => {
    console.log("clicked DIV");
    console.log(event);
  },
  true
);

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("clicked button");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });
list.addEventListener("click", (event) => {
  //   console.log(event.currentTarget);
  //   event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  //   form.submit();
  button.click();
});
