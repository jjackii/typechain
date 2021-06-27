// const name = "jjack",
//   age = 24,
//   gender = "female";

// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

// const person = {
//     name: "jjack",
//     age: 25,
//     gender: "Female"
// };

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jjackii = new Human("jjackii", 25, "Female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age} and ${person.gender}!`;
};  

console.log(sayHi(jjackii))

export {};
