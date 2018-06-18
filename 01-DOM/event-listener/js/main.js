class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log('Hello');
    }
}

const ahmed = new Person('Ahmed', 'soliman');

console.log(ahmed)