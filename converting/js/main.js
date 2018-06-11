let val;

// Num to string
val = String(55);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());
val = String([1,2,3]);

// ToString
val = (5).toString();



// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');


val = parseInt('100.30');
val = parseFloat('100.30');


console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));