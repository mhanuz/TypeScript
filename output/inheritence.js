"use strict";
// mechanism which acquires the properties and behaviors of a class from another class
// whose members are inherited is called the base class
// class that inherits those members is called the derived/child/subclass.
// supports only single inheritance and multilevel inheritance
//single inheritence
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    getBasicDetails() {
        return `${this.name} ${this.age}`;
    }
}
class EmpDetails extends Person1 {
    constructor(name, age, designation, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.salary = salary;
    }
}
// mutli-level inheritence
class P1 {
    constructor(houseNo, roadNo) {
        this.houseNo = houseNo;
        this.roadNo = roadNo;
        this.houseNo = houseNo;
        this.roadNo = roadNo;
    }
    houseInfo() {
        return `House No: ${this.houseNo} and roadNo ${this.roadNo}`;
    }
}
class P2 extends P1 {
    constructor(houseNo, roadNo, town, policeStation) {
        super(houseNo, roadNo);
        this.houseNo = houseNo;
        this.roadNo = roadNo;
        this.town = town;
        this.policeStation = policeStation;
    }
    houseInfo() {
        return `House No: ${this.houseNo}, Road No :${this.roadNo}, Town: ${this.town}, Police Station: ${this.policeStation}`;
    }
}
class P3 extends P2 {
    constructor(houseNo, roadNo, town, policeStation, city, zipCode) {
        super(houseNo, roadNo, town, policeStation);
        this.houseNo = houseNo;
        this.roadNo = roadNo;
        this.town = town;
        this.policeStation = policeStation;
        this.city = city;
        this.zipCode = zipCode;
    }
}
let address = new P3(23, 12, "Mohammodpur", "Hazaribag", "Dhaka", 1207);
console.log(address.houseInfo());
