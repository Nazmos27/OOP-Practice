/**
 * What is Inheritance?
 * ==> Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (called a subclass or derived class) to inherit properties and behaviors from another class (called a superclass or base   class).
 */


class Player{
    #name;
    #age;

    constructor (name, age){
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails(){
        return `${this.#name}, ${this.#age}-year-old`
    }
}

class Cricketer extends Player {

    
    #centuries;

    constructor (name, age, centuries){
        super(name,age)
        this.#centuries = centuries;
    }
}

class Footballer extends Player {
    
    #goals;

    constructor(name,age,goals){
        super(name,age)
        this.#goals = goals;
    }

}

const sakib = new Cricketer("shakib",32,12);
const ronaldo = new Footballer("Ronaldo" , 35, 404)

console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());