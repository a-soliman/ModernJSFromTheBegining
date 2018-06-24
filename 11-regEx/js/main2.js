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

// Brackets [] - character Sets
re = /gr[ea]y/i; // Must be an a or an e 
re = /[GF]ray/; // Must be a G or F 
re = /[A-Z]ray/; // Matches any uppercase letter;
re = /[a-z]ray/;

// Braces {} = Quantifiers
re = /Hel{2}o/i; // must occur exactly {n} amount of times.
re = /hel{2,4}o/i; // must occur between 2 and 4 times
re = /hel{2,}o/i; // must occur at leat (n) times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // grouping the () part then applying the quantifiers on the gruop

re = /^([0-9]x){3}$/; // grouping the () part then applying the quantifiers on the gruop, then restrcting the begging and end

// Shorthand character Classws
re = /\w/; // Word charater - alphnumeric or _

// string to match
const str = '3x3x3x3x';

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