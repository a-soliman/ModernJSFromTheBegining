// CREATE ELEMENT
const li = document.createElement('li');
const link = document.createElement('a');
const icon = document.createElement('i');


// ADD A CLASS
li.className = 'collection-item';
link.className = 'delete-item secondary-content';
icon.className = 'fa fa-remove';

// ADD ID
li.id = 'new-item';

// ADD ATTRIBUTE
li.setAttribute('title', 'new-item');
link.setAttribute('href', '#');

// APPEND TEXT
const li_text = document.createTextNode('Hello World!');
li.appendChild(li_text);

link.appendChild(icon);
li.appendChild(link);

// APPEND THE ELEMENT TO THE DOM
const ul = document.querySelector('ul');
ul.appendChild(li);




console.log(li);
console.log(link);