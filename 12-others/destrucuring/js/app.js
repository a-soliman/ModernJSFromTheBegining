//Destructuring Assignment

let winnerOne, winnerTwo;
//[winnerOne, winnerTwo, ...rest] = ['John', 'Jane', 'mike', 'Jack', 'Jen'];
// console.log(winnerOne);
// console.log(winnerTwo);
// console.log(rest);

const myObj = {
    name: 'John',
    age: 25,
    address: '123 main st',
    phone: '4155555555'
};

let name, age;
({name, age, ...rest} = myObj);

console.log(name);
console.log(age);
console.log(rest);

