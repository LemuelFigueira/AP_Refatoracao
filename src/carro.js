class Carro {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._NORMAL = 1;
        this._LANCAMENTO = 2;
    }

    get NORMAL() {
        return this._NORMAL;
    }

    get LANCAMENTO() {
        return this._LANCAMENTO;
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