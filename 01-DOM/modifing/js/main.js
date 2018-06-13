let val;

// CREATE ELEMENT
const newHeading = document.createElement('h2');
const text = document.createTextNode('Task List');
newHeading.appendChild(text);

// REPLACE ELEMENTS
const oldHeading = document.querySelector('h5#task-title');
const parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);

// CLASS ADD/ REMOVE
newHeading.className = 'Test class';
newHeading.classList.add('more-test');
newHeading.classList.remove('class');
val = newHeading.classList.contains('test');

// ATTRIBUTES
const link = document.querySelector('li:first-child').firstElementChild;
val = link.setAttribute('href', 'somewhere');
console.log(val);