// basic structure

/* 
    Mediator PATTERN 
    -----------------
*/

function User(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function( message, to) {
        this.chatroom.send(message, this, to);
    },

    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};

function Chatroom() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function(message, from, to) {
            if( to ) {
                // signle user message
                to.recieve(message, from);
            } else {
                for( let user in users ) {
                    if( users[user] !== from ) {
                        users[user].recieve(message, from);
                    }
                }
            }
        }
    };
} 


const brad = new User('brad');
const jeff = new User('jeff');
const sara = new User('sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('hey jeff', jeff);
jeff.send('hey Everyone!!!!');