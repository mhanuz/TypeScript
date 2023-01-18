"use strict";
// There are three types of member visibilities: public, private and protected.
// Public functions and properties can be accessed from anywhere. By default, all methods and properties are ‘public
class Student1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    student_details1() {
        console.log("my name is : " +
            this.name +
            " my roll no is : " +
            `${this.id.toString()}`);
    }
}
let obj1 = new Student1("rahul", 367236);
obj1.student_details1();
P1.name; // outside of  class 
// protected: Members or properties are accessible in the same class or their subclasses.
class Student2 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    student_details() {
        console.log("my name is : " +
            this.name +
            " my roll no is : " +
            `${this.id.toString()}`);
    }
    student_name() {
        console.log("My name is : " + self.name);
    }
}
class classRepresentative extends Student {
    detail() {
        console.log("I am the class representative, my name is :"
            + this.name);
    }
}
let obj2 = new Student("rahul", 367236);
let obj3 = new classRepresentative("samuel", 287636);
//Private:  Private is similar to protected, but it also prevents subclasses from accessing the member
