try {
    // Reference error
    //myFunction();
    
    // TypeError
    //null.myFunction();

    // Syntax Error
    //eval('Hello World');

    // URI Error
    //decodeURIComponent('%');

} catch(e) {
    console.log('Caching Error, details below ');
    console.log('name: ', e.name);
    console.log('message: ', e.message);

} finally {
    console.log('This runs no metter what happens');
}

console.log('program continues');