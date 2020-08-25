import STORE from "../store.js";

//Public
class VendingService {
    constructor() { }

    buy(id) {
        console.log("works")
        let items = STORE.State.items
        let item = items.find(i => i.id === id)
        if (item.count < 1)
            return alert("Current Inventory 0, Check Back Later.")
        if (STORE.State.funds >= item.price) {
            STORE.State.funds -= item.price
            item.count--
        } else {
            return alert("Insert More Coins")
        }
    }

    addCoin() {
        STORE.State.funds += 0.25
    }


}





const SERVICE = new VendingService();
export default SERVICE;
