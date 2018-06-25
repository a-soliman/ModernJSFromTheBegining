// Create an array of name
const namesArray = ['Mike', 'Jack', 'John'];

/*
// Iterator Example
function nameIterator( names ) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? 
            { value: names[nextIndex++], done: false } :
            { done: true };
        }
    };
}

// Init iterator and pass the names array
const names = nameIterator(namesArray);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// ------------
*/

// Generator Example
function* sayNames() {
    yield 'Jack';
    yield 'John';
    yield 'Brad';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());