// Реалізуйте клас Worker(Працівник), який буде мати такі властивості:
// firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(),який буде виводити зарплату працівника.
// Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

class Worker {

    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days
    }

    getSalary() {
        return `Salary: ${this.days * this.rate}`;
    }
}

const workerIvan = new Worker('Ivan', 'Ivanov', 31, 10);
const workerPetro = new Worker('Petro', 'Petriv', 50, 21);