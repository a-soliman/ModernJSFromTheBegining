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

function createPost( post, callback ){
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
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

createPost({title: "post three", body: "this is post three"}, getPosts);
