"use strict";
//to unpack values from arrays or properties from object literals into distinct variables
// array destruce
let Student_Id = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
let [std1, std2, std3] = Student_Id; // first variable assign by first element and so on.
console.log(std3);
let [, , id3] = Student_Id; // ignoring left side elements use comma (,) 
console.log(id3);
let [id1, id2, ...restStudents] = Student_Id; // spread operator store all the elements except first two
console.log(restStudents); // will return an array
//destructing array element passed into function
let empInfo = [39, 2023, "hasan", "swe", "ceanuz666@gmail.com", "30 years old", 5.6];
function getPerson([, , Name, designation]) {
    return `Name ${Name} Designation ${designation}`;
}
console.log(getPerson(empInfo));
//destructuring object passed into function
let empInfoObject = {
    name: "Kabir",
    age: 35,
    salary: 40000,
    experience: " 3 years",
    company: "ESS",
    designation: "SWE"
};
function getEmpInfo({ name: n, age: a }) {
    return `Name ${n} Age ${a}`;
}
console.log(getEmpInfo(empInfoObject));
