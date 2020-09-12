class Carro {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.NORMAL = 1;
        this.LANCAMENTO = 2;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}

function newCar(name, price) {
    return new Carro(name, price);
}

module.exports = {
    newCar
};