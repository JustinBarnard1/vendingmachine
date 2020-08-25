import Vending from "./Models/Vending.js";

let _state = {
  funds: 0,
  /** @type {Value[]} */
  items: [
    new Vending(1, "doritos", "./assets/doritos.jpg", 4, 2.50),
    new Vending(2, "Mountain Dew", "./assets/mountainDew.png", 3, 1.75)
  ]
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
