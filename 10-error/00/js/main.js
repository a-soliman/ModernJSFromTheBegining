const user = {email: 'joe@gmail.com'};

try {
    // Reference error
    //myFunction();
    
    // TypeError
    //null.myFunction();

    // Syntax Error
    //eval('Hello World');

    // URI Error
    //decodeURIComponent('%');

    // Custom Error
    if ( !user.name ) {
        throw new Error('User has no prop name.');
    }

} catch(e) {
    console.log('Caching Error, details below ');
    console.log('name: ', e.name);
    console.log('message: ', e.message);
    console.log(e);

} finally {
    console.log('This runs no metter what happens');
}

console.log('program continues');