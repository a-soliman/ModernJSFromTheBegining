let re;
re = /hello/;

console.log(re);
console.log(re.source);

// exec() => returns result in an array or null
const result1 = re.exec('hello world!');
const result2 = re.exec('hey world!');
console.log('exec() match: ', result1);
console.log('exec() No-match: ', result2);