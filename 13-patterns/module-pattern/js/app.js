// basic structure

/* 
    STANDERD MODULE PATTERN 
    -----------------------
*/

// const UICtrl = (function(){
//     const text = 'Hello World!';
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     };

//     return {
//         callChangeText : function() {
//             changeText();
//             console.log(text);
//         }
//     };
// })();

// UICtrl.callChangeText();

/* 
    REVELING MODULE PATTERN
    -----------------------
*/
const ItemCtrl = (function() {
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log('item added');
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    };
})();

ItemCtrl.add(({id: 1, name: 'John'}));
ItemCtrl.add(({id: 2, name: 'Mike'}));

console.log(ItemCtrl.get(2));