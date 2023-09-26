const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "us123";
const user = {
  name: "tom",
  age: 30,
  hobbies: ["sports", "cooking"],
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extractedID = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedID) {
    console.log("Got the id - " + extractedID);
  } else {
    console.log("couldnt find id");
  }
});
