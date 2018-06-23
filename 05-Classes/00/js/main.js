class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return 'Hello ' + this.firstName;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

}

//const ahmed = new Person('Ahmed', 'soliman');
const john = new Customer('John', 'Whilliams', '4155555555', 'Gold');
//console.log(ahmed);
console.log(john.greet());