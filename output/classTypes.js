"use strict";
class UserInformation {
    constructor(name, dept, experience, salary) {
        this.name = name;
        this.dept = dept;
        this.experience = experience;
        this.salary = salary;
    }
    MyInfo() {
        console.log(`Name: ${this.name}, Dept: ${this.dept}, Experience: ${this.experience}, and salary = ${this.salary}`);
    }
}
const mashrafee = new UserInformation("mashrafee", "bowler", 10, 30000);
const shakib = new UserInformation("shakib", "allrounder", 5, 25000);
const employee = [];
employee.push(mashrafee);
employee.push(shakib);
console.log(mashrafee.dept);
