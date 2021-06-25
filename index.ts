const name = "jjack",
  age = 24,
  gender = "female";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age} and ${gender}`);
};  

sayHi(name, age);

export {};
