import VendingService from "../Services/VendingService.js";
import STORE from "../store.js";

// Private
function _drawItem() {
  let item = STORE.State.items
  item.forEach(i => {
    i. += item[i]
  })
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

