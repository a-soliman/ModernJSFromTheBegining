// basic structure

/* 
    State PATTERN 
    -----------------
*/
const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    };

    this.chanage = function(state) {
        currentState = state;
    };
};

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <h1>Home</h1>
    `;
};

const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
}