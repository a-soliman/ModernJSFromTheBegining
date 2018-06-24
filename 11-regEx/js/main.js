let re;
re = /hello/;
re = /hello/i;


/* 
FALGS
-----

i => case insensitive
g => Glocal search
*/

console.log(re);
console.log(re.source);

// exec() => returns result in an array or null
let result1 = re.exec('hello world!');
let result2 = re.exec('hey world!');
console.log('exec() match: ', result1);
console.log('exec() No-match: ', result2);

// test() => returns true or false
result1 = re.test('Hello world!');
result2 = re.test('hey world!'); 
console.log('test() match: ', result1);
console.log('test() No-match: ', result2);


// match() => returns result array or null
const string = 'Hello world!';
const string2 = 'Hey world!';
result1 = string.match(re);
result2 = string2.match(re); 
console.log('match() match: ', result1);
console.log('match() No-match: ', result2);

// search() => returns the index of first match or -1
result1 = string.search(re);
result2 = string2.search(re);
console.log('search() match: ', result1);
console.log('search() No-match: ', result2);

// replace() => Returns a new string with some or null maches of a pattern
let newStr = 'Hello There';
let replacesString = newStr.replace(re, 'Hi');
console.log(replacesString);