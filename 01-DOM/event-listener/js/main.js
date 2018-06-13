const button = document.querySelector('a.clear-tasks');
button.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    console.log(this);
    this.style.backgroundColor = '#fff';
    this.classList.toggle('black');
    this.classList.toggle('text-primary');
});

console.log(button);