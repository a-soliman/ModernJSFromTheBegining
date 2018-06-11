const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello there Iam Ahmed';

let val;
val = `${firstName} ${lastName}`;

// Escaping
val = 'that\'s awesome';
// Concat
val = firstName.concat(' ', lastName);
// Indexof
val = firstName.indexOf('i');
val = firstName.lastIndexOf('i');
val = firstName.charAt(4);

//substring
val = firstName.substring(0, 4);

//slice
val = firstName.slice(0, 4);
val = firstName.slice(-4);

// splice
val = str.split(' ');


console.log(val);