import VendingService from "../Services/VendingService.js";
import STORE from "../store.js";

// Private
function _drawItem() {
  let item = STORE.State.item
  document.getElementById("item").innerHTML = item.Template
}




//Public
export default class VendingController {
  constructor() {
    _drawItem()
  }



  buy() {
    VendingService.buy()
    _drawItem()
  }
}

