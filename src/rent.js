// --- Refactoring methods used ---
// encapsulate collection
// encapsulate variable
// remove setting method
// convert to arrow function
// single responsability -> rentValue method

class Rent {
    constructor(car, daysRented) {
        this._car = car;
        this._daysRented = daysRented;
    }

    calcRentValue = () => {

        // calculate the value from rent
        let value = 0;
        switch (this.getCar().getPrice()) {

            case this.getCar().NORMAL:
                value += 1.5;
                if (this.getDaysRented() > 3)
                    value += (this.getDaysRented() - 3) * 1.5;
                break;

            case this.getCar().LANCAMENTO:
                value += this.getDaysRented() * 3;
                break;
        }

        return value;

    }

    getCar() {
        return this._car;
    }

    getDaysRented() {
        return this._daysRented;
    }


}

function newRent(car, daysRented) {
    return new Rent(car, daysRented);
}

module.exports = {
    newRent
}