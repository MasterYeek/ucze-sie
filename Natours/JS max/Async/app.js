const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUser() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("timer done");
  });
}

button.addEventListener("click", trackUser);
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
