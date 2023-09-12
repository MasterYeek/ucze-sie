// const h1 = document.querySelector("h1");

// //change text
// h1.textContent = "Some new text!";

// //new class

// h1.className = " title";

// h1.style.color = "red";

// h1.style.backgroundColor = "blue";

// const input = document.querySelector("input");

// const input2 = document.querySelector("input");

// input2.value = "Some other input the user might have enteredd";

// //const h1 = document.getElementById("main-title");

// h1.id = "new-id";

// input.setAttribute("value", "some other default");

// input.value = input.getAttribute("value");

// // multiple elements

// const allLis = document.querySelectorAll("li");

// //const listItemELements = document.querySelectorAll("li");
// //Same
// const listItemELements = document.getElementsByTagName("li");

// for (const listItemEl of listItemELements) {
//   console.log(listItemEl);
// }

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";

// const body = document.body;
// body.querySelector;

const section = document.querySelector("section");
const button = document.querySelector("button");
// section.style.backgroundColor = "blue";

section.className = "red-bg";

button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  //Same
  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
