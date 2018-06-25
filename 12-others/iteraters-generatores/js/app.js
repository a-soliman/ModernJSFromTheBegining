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

// Create an array of name
const namesArray = ['Mike', 'Jack', 'John'];

// Init iterator and pass the names array
const names = nameIterator(namesArray);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());