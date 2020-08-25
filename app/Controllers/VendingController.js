import VendingService from "../Services/VendingService.js";
import STORE from "../store.js";

// Private
function _drawItem() {
  let item = STORE.State.items
  let nTemplate = ""
  item.forEach(i => {
    nTemplate += i.Template
  })
  document.getElementById("item").innerHTML = nTemplate
}

function _drawMoney() {
  let money = STORE.State.funds
  document.getElementById("money").innerText = money
}



//Public
export default class VendingController {
  constructor() {
    _drawItem()
  }



  buy() {
    VendingService.buy()
    _drawItem()
    _drawMoney()
  }

  addCoin() {
    VendingService.addCoin()
    _drawMoney()
  }
}

