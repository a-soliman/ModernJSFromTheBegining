let val;
// get element by id
val = document.getElementById('task-title');

//get attr from element
//val = val.id;

//change styling
val.style.background  = '#f5f5f5';

// modify content
val.textContent = 'Task List';
val.innerText = 'My Tasks';

// QUERY SELECTOR
val = document.querySelector('h5');


// class name
val = document.getElementsByClassName('collection-item');
// console.log(val);

lisArr = Array.from(val);
lisArr.forEach((item) => {
   //item.innerText = 'wazzzup';
});


// QuerySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
//console.log(items);


items.forEach( (item) => {
    item.style.color = 'red';
})