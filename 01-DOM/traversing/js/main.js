let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// get children
val = list.children;
//val = list.child
val = Array.from(val);

val.forEach((item, i) => {
    if ( (i+1) %2 === 0) {
        item.style.background = '#EEE';
    }
});

// FIRST and LAST CHILD
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount;

// GET PARENT
val = listItem.parentElement.parentElement;

// GET NEXT SIBLING
val = listItem.nextElementSibling;







console.log(val);