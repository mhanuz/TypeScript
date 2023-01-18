"use strict";
// use:  handling function types from external libraries and want to build custom types based on them
function utilityPartialType(myInfo, updateMyInfo) {
    return Object.assign(Object.assign({}, myInfo), updateMyInfo);
}
const myInfo1 = {
    name: "hasan tanvir",
    age: 30
};
const myInfo2 = utilityPartialType(myInfo1, {
    age: 25,
});
const myInfo3 = utilityPartialType(myInfo1, {
    name: "imran",
    age: 35
});
const obj4 = { fName: "abir" };
const obj5 = { fName: "hashim", lName: "amla" }; // error will generetate if i donot give any one property value.
// read only: reassign is not allowed
const obj6 = { fName: "hashim", lName: "amla" };
const obj7 = {
    fName: "Hashim"
};
const obj8 = {
    name: "abul",
    title: "hossain",
    post: "SWE"
};
