const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = () => {
  const promise = new Promise((resolve, reject) => { navigator.geolocation.getCurrentPosition(
    (success) => {},
    (error) => {},
    opts});
  );
};
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });

  return promise;
};

function trackUser() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then((data) => {
        console.log(data, posData);
      });
    },
    (error) => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log("timer done");
  });
}

button.addEventListener("click", trackUser);
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
