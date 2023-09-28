const { find } = require("core-js/core/array");

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-bin");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("sumbit", this.findAdressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is notm available in your bwoerser - pleaase ur a modern browser or use manually"
      );
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const cordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50,
        };
        console.log(cordinates);
      },
      (erorr) => {
        alert(
          "Could not locate you unfortunately. please enter and address manually!"
        );
      }
    );
  }

  findAdressHandler() {}
}

new PlaceFinder();
