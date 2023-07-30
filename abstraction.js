/**
 * What is Abstaction?
 * ==> Abstraction is a fundamental principle of Object-Oriented Programming (OOP) that focuses on simplifying complex systems by presenting only essential features to the outside world while hiding unnecessary details.
 */

class BetterArray {
    #items;

    constructor() {
        this.#items = [];
    }


    getItems(){
        return [...this.#items];
    }

    addItem(item){
        this.#items.push(item);
    }

    removeItem(itemToDelete){
        this.#items = this.#items.filter((item) => item !== itemToDelete);
    }

    modifyItems(itemToChange,newValue){
        const index = this.#items.indexOf(itemToChange);
        if(index !== -1){
            this.#items[index] = newValue;
        }
    }
}


const array = new BetterArray();
array.addItem("Blizzard");
array.addItem("Archer");
console.log(array.getItems());
array.removeItem("Blizzard");
console.log(array.getItems());
array.modifyItems("Archer","Super Archer")
console.log(array.getItems());