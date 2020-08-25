import STORE from "../store.js";

//Public
class VendingService {
    constructor() { }

    buy() {
        this.checkCount()
    }

    checkCount() {
        let item = STORE.State.item
        if (item.count < 1)
            return alert("Current Inventory 0, Check Back Later.")
        if (STORE.State.funds >= item.price)
            STORE.State.funds -= item.price
        item.count--
    }


}





const SERVICE = new VendingService();
export default SERVICE;