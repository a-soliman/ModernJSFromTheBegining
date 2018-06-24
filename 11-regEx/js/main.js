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