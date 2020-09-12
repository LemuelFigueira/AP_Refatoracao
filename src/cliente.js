class Cliente {
    constructor(name) {
        this.name = name;
        this.rents = [];
    }

    addRent(rent) {
        this.rents.push(rent);
    }

    getName() {
        return this.name;
    }

    calcRentValue(rent) {

        // calculate the value from rent
        let value = 0;
        switch (rent.getCar().getPrice()) {

            case rent.getCar().NORMAL:
                value += 1.5;
                if (rent.getDaysRented() > 3)
                    value += (rent.getDaysRented() - 3) * 1.5;
                break;

            case rent.getCar().LANCAMENTO:
                value += rent.getDaysRented() * 3;
                break;
        }

        return value;
    }

    calcBonus(rent) {
        // Bônus para mais de dois dias com um lancamento
        if (rent.getCar().getPrice() == rent.getCar().LANCAMENTO && rent.getDaysRented() > 1) {
            return 1;
        }

        return 0;
    }

    showRentRegistry() {
        let totalValue = 0;
        let points = 0;

        let dados = ` Registro de aluguéis do cliente ${this.getName()} \n\n`;

        this.rents.forEach((element, index) => {
            let value = 0;

            // calculate the value from rent

            value += this.calcRentValue(element);

            // switch (element.getCar().getPrice()) {

            //     case element.getCar().NORMAL:
            //         value += 1.5;
            //         if (element.getDaysRented() > 3)
            //             value += (element.getDaysRented() - 3) * 1.5;
            //         break;

            //     case element.getCar().LANCAMENTO:
            //         value += element.getDaysRented() * 3;
            //         break;
            // }

            // Adiciona um ponto
            points++;

            // Bônus para mais de dois dias com um lancamento
            // if (element.getCar().getPrice() == element.getCar().LANCAMENTO && element.getDaysRented() > 1) {
            //     points++;
            // }
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

function newCliente(name) {
    return new Cliente(name);
}

module.exports = {
    newCliente
};