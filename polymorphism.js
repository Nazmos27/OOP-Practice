/**
 * What is Polymorphism?
 * ==>Polymorphism is a key concept in Object-Oriented Programming (OOP) that allows objects to take on multiple forms and behave differently based on their context.
 */




//common Class to contain common variables and functions
class Player{ 

    #name;
    #age;

    constructor (name, age){
        this.#name = name;
        this.#age = age;
    }

    getName(){
        return this.#name;
    }

    getAge(){
        return this.#age;
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

    getPlayerDetails(){
        return `${this.getName()} এর বয়স ${this.getAge()} বছর`
    }


}

const sakib = new Cricketer("shakib",32,12);
const ronaldo = new Footballer("Ronaldo" , 35, 404)

console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());