export default class Vending {
    constructor(name, img, count, price) {
        this.name = name
        this.img = img
        this.count = count
        this.price = price
    }

    get Template() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="this.name">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.count}</p>
                <p class="card-text">${this.price}</p>
                <a href="#" class="btn btn-primary" onclick("app.vendingContoller.buy()")>Buy</a>
             </div>
        </div>
        `
    }
}