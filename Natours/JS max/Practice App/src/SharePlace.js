const { find } = require("core-js/core/array");
import {Modal} from './UI/Modal.js'
import { Map } from './UI/map.js';


class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-bin");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("sumbit", this.findAdressHandler.bind(this));
  }
  selectPlace(cordinates) {
    if(this.map){
      this.map.render(cordinates)
    }else{
    this.map = new Map(cordinates)
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is notm available in your bwoerser - pleaase ur a modern browser or use manually"
      );
      return;
    }
    
    
    const modal =  new Modal ('loading-modal-content', 'Loading location - please wait0')
    modal.show()
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const cordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50,
        };
        this.selectPlace(cordinates)
      },
      (erorr) => {
        modal.hide()
        alert(
          "Could not locate you unfortunately. please enter and address manually!"
        );
      }
    );
  }

  findAdressHandler() {}
}

new PlaceFinder();