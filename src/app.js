const { newCar } = require('./carro');
const { newRent } = require('./rent');
const { newCliente } = require('./cliente');

let cliente01 = newCliente("Lemuel");

let Tesla = newCar("Tesla", 2);
let Audi = newCar("Audi", 1);

let rentTesla = newRent(Tesla, 20);
let rentAudi = newRent(Audi, 15);


cliente01.addRent(rentTesla);
cliente01.addRent(rentAudi);

cliente01.showRentRegistry();