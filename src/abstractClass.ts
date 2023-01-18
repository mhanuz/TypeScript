// when we want to give a specific implementation of our methods
// An abstract class typically includes one or more abstract methods or property declarations
// The class which extends the abstract class must define all the abstract methods.
// abstraction: hiding the unnecessary details from the users.

abstract class CricketerInfo {
    constructor(public firstName: string, public lastName: string) {
    }
    abstract getSalary(): number;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class CricketDetails extends CricketerInfo {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

let tamim =new CricketDetails("tamim",'iqbal',3500);
let mortaja = new CricketDetails("mashrafee","mortaja",4000)

console.log(tamim);
console.log(mortaja);

