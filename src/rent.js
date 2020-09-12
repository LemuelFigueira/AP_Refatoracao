class Rent {
    constructor(car, daysRented) {
        this.car = car;
        this.daysRented = daysRented;
    }

    getCar() {
        return this.car;
    }

    getDaysRented() {
        return this.daysRented;
    }


}

function newRent(car, daysRented) {
    return new Rent(car, daysRented);
}

module.exports = {
    newRent
}

