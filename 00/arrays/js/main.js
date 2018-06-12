const numbers = [0 , 2 , 4 ,55 ,77 ,5];
const numbers2 = new Array(4, 55, 33, 22, 12);

let val;
// length
val = numbers.length;

// check if array
val = Array.isArray(numbers);

// get single value
val = numbers[3];

// insert into array
numbers[2] = 100;


// mutating arrays
numbers.push(555);
numbers.unshift(111);
numbers.pop();
numbers.shift();

numbers.splice(1,1);
val = numbers.sort(( a, b ) => {
    return a - b; 
});

console.log(numbers);
console.log(val);