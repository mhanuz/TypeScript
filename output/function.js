"use strict";
// block of code
// specific task 
// code reuse
const myFunc = (a, b, c = "Done") => {
    return a + b;
};
console.log(myFunc(4, 5));
const myFunc2 = (a, b) => {
    return `${a} and ${b}`;
};
console.log(myFunc2("imran", "hasan"));
