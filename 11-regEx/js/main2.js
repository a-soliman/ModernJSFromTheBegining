let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Meta characters symboles
re = /^h/i; // => must start with
re = /world$/i; // => must end with
re = /^hello$/i; // => must start and end with;
re = /h.llo/i; // => matches any ONE character;
re = /h*llo/i; // Matches any character 0 or more times;
re = /gre?a?y/i; // => optional character;
re = /gre?a?y\?/i; 



// string to match
const str = 'Gray?';

// log result
const result = re.exec(str);
console.log('exec(): ', result);


function reTest( re, str ) {
    if ( re.test(str) ) {
        console.log(`test(): ${str} matches ${re.source}`);
    }
    else {
        console.log(`test(): ${str} does not matche ${re.source}`);
    }
}

reTest(re, str);