/**
 * What is Encapsulation?
 * ==> It refers to the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit called an object.

In short, encapsulation hides the internal implementation details of an object and provides a well-defined interface to interact with it. This helps to ensure data integrity, reduces dependencies between different parts of the code, and promotes better organization and maintainability of the software.
 */


let name = 'Shakib Al Hassan';
let birthday = "1987-03-24";
let monthlySallary = 2000000;
let noOfMonths = 12;

function calculate_age(dob) { // dob = date of birth
    const diff_ms = Date.now() - new Date(dob).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


function getSallary(monthlySallary, noOfMonths) {
    return (monthlySallary * noOfMonths).toLocaleString();
}

console.log(calculate_age(birthday));
console.log(getSallary(monthlySallary, noOfMonths));

//the problem of the above code is that here functions are scatterred in all over the code.In case of big project,if there are so many functions scatterred on this way,it become very difficult to handle them and it is become also tough to input parameter of each function seperately and consequtively one by one else it will throws error.Increased number of parameters hampered the code efficiency and make it unmanagable,and tough to read.To solve this problem we use Encapsulate to keep common things in a class to reuse it again and again.



const sakib = {
    name: 'Shakib Al Hassan',
    birthday: "1987-03-24",
    monthlySallary: 2000000,
    noOfMonths: 12,

    calculate_age() { // dob = date of birth
        const diff_ms = Date.now() - new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    },

    getSallary() {
        return (this.monthlySallary * this.noOfMonths).toLocaleString();
    }
}

console.log(sakib.calculate_age());
console.log(sakib.getSallary());

//here we declare variable and functions in a object named sakib.so the funtion will not take any parameter rather it will use them from already declared property of this object using "this".


class Player {
    constructor(name, birthday, monthlySallary, noOfMonths) {
        this.name = name;
        this.monthlySallary = monthlySallary;
        this.noOfMonths = noOfMonths;
        this.birthday = birthday;
    }

    calculate_age() { // dob = date of birth
        const diff_ms = Date.now() - new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    getSallary() {
        return (this.monthlySallary * this.noOfMonths).toLocaleString();
    }
}

const tamim = new Player("tamim Iqbal", "1987-05-23", 1500000, 12)
const soumya = new Player("Soumya Sarkar", "1990-11-11", 100000, 23)

console.log("tamim", tamim.calculate_age());
console.log("tamim", tamim.getSallary());
console.log("soumya sarkar", soumya.calculate_age());
console.log("soumya sarkar", soumya.getSallary());

//here we encapsulate all common parameter and function in one class which is helping us to create onject of different players easily and efficiently...If we do not use class,we have to create every time every player profile.