//Destructuring Assignment

let winnerOne, winnerTwo;
[winnerOne, winnerTwo, ...rest] = ['John', 'Jane', 'mike', 'Jack', 'Jen'];
console.log(winnerOne);
console.log(winnerTwo);
console.log(rest);