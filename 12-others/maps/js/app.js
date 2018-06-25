// Maps = key value pairs - can use any type as a key or a value

const map1 = new Map();


// Set Keys
const key1 = 'some string';
const key2 = {};
const key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');


// Get values by keys
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// size = count
console.log(map1.size);

// Iterating using for...of to get key-value 
for ( let [key, value] of map1 ) {
    console.log(`${key} = ${value}`);
}

// Iterating using for...of to get keys only
for ( let key of map1.keys() ) {
    console.log(`${key}`);
}

// Iterating using for...of to get values only
for ( let value of map1.values() ) {
    console.log(`${value}`);
}

// loop using for Each
map1.forEach( (key, value ) => {
    console.log(`key: ${key}, value: ${value}`);
});

// Converting to array
const keyValArray = Array.from(map1);
console.log(keyValArray);
