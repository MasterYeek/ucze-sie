// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

//1 const sayHello = name => console.log("Hi " + name);

const sayHello = (a, b) => console.log("Hi " + name);

//2

const sayHello5 = (name, phrase) => console.log(phrase + " " + name);
const sayHello3 = () => console.log("Hi hardcoded");
const sayHello4 = (name) => "hi " + name;

//3
const sayHello6 = (name, phrase = "hi") => console.log(phrase + " " + name);

//4

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empy");
  },
  "Hello",
  "12",
  "asdfa",
  "not empty"
);
