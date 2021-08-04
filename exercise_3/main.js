// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів
// кавоварок: капельна, ріжкова, каво-машина які будуть наслідувати базовий функціонал CoffeeMake,
// а також мати власний. Використовує cучасний class.

class Coffemake {
    constructor(color = 'black', model) {
        this.color = color;
        this.model = model;
    }
    on() {
        console.log('ON');
    }
    off() {
        console.log('off');
    }
}

class DripCoffeeMake extends Coffemake {
    constructor(color, model) {
        super(color, model);
    }
    start() {
        console.log('*bzzzz*')
    }
}

class CarobCoffeeMake extends Coffemake {
    constructor(color, model) {
        super(color, model);
    }
    createCoffe() {
        console.log('Your coffee is ready')
    }
}

class MachineCoffeeMake extends Coffemake {
    constructor(color, model) {
        super(color, model);
    }

    launching() {
        console.log('done')
    }
}

let dripCoffee = new DripCoffeeMake('red', '1SAD3F');
let carobCoffee = new CarobCoffeeMake('green', 'BETA001');
let machineCoffee = new MachineCoffeeMake('white', 'T1000');