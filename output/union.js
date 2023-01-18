"use strict";
// we can define a variable which can have multiple types of values.
let unionVar;
unionVar = 10;
console.log(unionVar);
unionVar = "TypeScript";
console.log(unionVar);
function unionFunction(uniVar) {
    if (typeof (uniVar) === "number") {
        console.log("this is a nunber");
    }
    else if (typeof (uniVar) === "string") {
        console.log("this is a string");
    }
}
unionFunction(10);
unionFunction("HI there");
let unionArray;
unionArray = [1, 2, 3, 4, 5];
unionArray = ['hi', 'hello', 'typescript'];
