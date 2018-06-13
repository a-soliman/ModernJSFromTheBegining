const clearButton = document.querySelector('a.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearButton.addEventListener('click', runEvent);
clearButton.addEventListener('dblclick', runEvent);
clearButton.addEventListener('mousedown', runEvent);
clearButton.addEventListener('mouseenter', runEvent);
clearButton.addEventListener('mouseleave', runEvent);
clearButton.addEventListener('mouseover', runEvent);
clearButton.addEventListener('mouseout', runEvent);

document.addEventListener('mousemove', updatexy);




function runEvent( e ) {
    e.preventDefault();
    console.log(e.clientX)
    console.log(`Event type: ${e.type}`);
}

function updatexy(e) {
    const ele = document.querySelector('h5');
    const x = e.clientX;
    const y = e.clientY;

    ele.innerText = `X: ${x}, Y: ${y}`;
}