export class Person {
    constructor(name, height, weight, bmi) {
        this.name = name
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
    }

    getName() {
        return this.firstname + " " + this.lastname
    }
}