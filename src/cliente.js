// --- Refactoring methods used ---
// removing setter method
// encapsulate record
// single responsability
// convert to arrow function


class Cliente {
    constructor(name) {
        this.name = name;
        this.rents = [];
    }

    addRent = (rent) => {
        this.rents.push(rent);
    }

    getName = () => {
        return this.name;
    }

    calcRentValue = (rent) => {

        var value = rent.calcRentValue();

        return value;
    }

    calcBonus = (rent) => {
        // Bônus para mais de dois dias com um lancamento
        if (rent.getCar().getPrice() == rent.getCar().LANCAMENTO && rent.getDaysRented() > 1) {
            return 1;
        }

        return 0;
    }

    showRentRegistry = () => {
        let totalValue = 0;
        let points = 0;

        let dados = ` Registro de aluguéis do cliente ${this.getName()} \n\n`;

        this.rents.forEach((element, index) => {
            let value = 0;

            // calculate the value from rent
            value += this.calcRentValue(element);

            // Adiciona um ponto
            points++;

            // Bônus para mais de dois dias com um lancamento
            points += this.calcBonus(element);


            // Adiciona os dados desse aluguel
            dados += (`\t ${element.getCar().getName()} \t`);
            dados += (`= R$ ${value}\n`)

            totalValue += value;
        })

        // Rodapé
        dados += (`\n\nTotal gasto com aluguéis: R$ ${totalValue}`);
        dados += (`\nPontos ganhos: ${points}`);

        console.log(dados);
    }
}

newCliente = (name) => {
    return new Cliente(name);
}

module.exports = {
    newCliente
};