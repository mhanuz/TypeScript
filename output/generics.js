"use strict";
// genereics: is a tool, create reusable component, Compile-Time Checking 
// works with variety of data types, provides type safety, Typecasting is not required
// Generics use a special kind of type variable <T> that denotes types
function identity(p1) {
    return p1;
}
let output1 = identity("Typescript generics");
let output2 = identity(35);
console.log(output1);
console.log(output2);
function getItems(items) {
    return new Array().concat(items);
}
let myNumArr = getItems([1, 2, 3, 4, 5]); // argument type and return value are number
let myStringArr = getItems(["A", "B", "C"]); // // argument type and return value are string
myNumArr.push(6);
console.log(myNumArr);
//multi type variables
function multiTypeVariable(id, name) {
    console.log(typeof (id), typeof (name));
}
multiTypeVariable("HI", 5);
function genericWithNonGenereic(id, name) {
    console.log(typeof (id), typeof (name));
}
genericWithNonGenereic(1, "Rocky");
