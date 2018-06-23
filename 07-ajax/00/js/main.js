document.querySelector('form').addEventListener('submit', getJokes);

function getJokes(e) {
    e.preventDefault();
    const numOfJokes = e.target.children[0].children[1].value;
    if ( numOfJokes < 1 ) {
        alert("please add a number.");
        return;
    }
    console.log(numOfJokes);
}

function fetchJokes(num) {

}