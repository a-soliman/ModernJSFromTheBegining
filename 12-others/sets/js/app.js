// SETS - Store unique values of any type.

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('string');
set1.add({ name: 'Jack' });
set1.add(true);

set1.add(100);

// console.log(set1);
// const testArr = [1,1,1,2,3,2,3,4];
// const set2 = new Set(testArr);

// console.log(set2);

// console.log(set1.has(50 + 50));

// console.log(set1);
// set1.delete(100);
// console.log(set1);

// loop using for of
for ( let item of set1 ) {
    console.log(item);
}

// loop using for each
set1.forEach((item) => {
    console.log(item);
});

let setArr = Array.from(set1);
console.log(setArr);