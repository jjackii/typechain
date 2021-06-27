// const name = "jjack",
//   age = 24,
//   gender = "female";

const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age} and ${gender}!`;
};  

console.log(sayHi("jjack", 25, "Female"));

export {};
