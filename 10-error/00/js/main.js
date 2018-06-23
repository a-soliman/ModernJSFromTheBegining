try {
    myFunction();
} catch(e) {
    console.log('Caching: ', e);
} finally {
    console.log('This runs no metter what happens');
}

console.log('program continues');