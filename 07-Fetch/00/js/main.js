document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

function getText() {
    fetch('test.txt')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.querySelector('#output').innerText = data;
        })
        .catch((err) => {
            console.log(er);
        });
}

function getJSON() {
    fetch('post.json')
        .then(( response ) => {
            return response.json();
        })
        .then(( data) => {
            const output = document.querySelector('#output');
            data.forEach((post) => {
                output.innerText += post.title + '\n';
            });
        })
        .catch( ( err ) => {
            console.log(err);
        });
}

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/pos.ts')
        .then( ( response ) => {
            if( response.status === 200) {
                return response.json();
            }
        })
        .then( ( data ) => {
            console.log(data);
        })
        .catch( ( err ) => {
            console.log('Error: ', err);
        });
}