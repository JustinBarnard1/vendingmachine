import Vending from "./Models/Vending.js";

let _state = {
  /** @type {Value[]} */
  item: new Vending("doritos", "./doritos.jpg", 4, 2.50),
  item: new Vending("Mountain Dew", "./mountainDew.png", 3, 1.75)
};

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
