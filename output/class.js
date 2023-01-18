"use strict";
// classes are the fundamental entities which are used to create reusable components
// code reusable 
class Student {
    constructor(name, id) {
        this.studentName = name;
        this.studentId = id;
    }
    getDetails() {
        return `studentName ${this.studentName} and id is ${this.studentId}`;
    }
}
// object initialization 
// 1st method 
let obj = new Student("tamim", 35);
console.log(obj);
console.log(obj.getDetails());
