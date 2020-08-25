export default class Vending {
    constructor(id, name, img, count, price) {
        this.id = id
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
                <p class="card-text">Available: ${this.count}</p>
                <p class="card-text">$ ${this.price}</p>
                <button class="btn btn-primary" onclick="app.vendingController.buy(${this.id})">Buy</button>
             </div>
        </div>
        `
    }
}