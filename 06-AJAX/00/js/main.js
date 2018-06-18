const posts = [
    {
        title: "post one",
        body: "This is post one"
    },
    {
        title: "post two",
        body: "This is post two"
    }
];

function createPost( post ){
    return new Promise( ( resolve, reject ) => {
        setTimeout(()=> {
            const err = false;
            posts.push(post);
            if ( !err ) {
                resolve();
            }
            else {
                reject('Error: Something went wrong!');
            }
            
        }, 2000);
    });
}

function getPosts() {
    setTimeout(() => {
        let output;
        posts.forEach((post) => {
            output += `
                <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "post three", body: "this is post three"})
    .then(getPosts)
    .catch((err)=> {
        console.log(err);
    });
