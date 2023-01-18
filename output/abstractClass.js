"use strict";
// when we want to give a specific implementation of our methods
// An abstract class typically includes one or more abstract methods or property declarations
// The class which extends the abstract class must define all the abstract methods.
// abstraction: hiding the unnecessary details from the users.
class CricketerInfo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class CricketDetails extends CricketerInfo {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
let tamim = new CricketDetails("tamim", 'iqbal', 3500);
let mortaja = new CricketDetails("mashrafee", "mortaja", 4000);
console.log(tamim);
console.log(mortaja);
