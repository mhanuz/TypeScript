"use strict";
// type idValue = number | string
// type objValue = {name: string, age: number}
// let userDetail: (id: idValue, userInformation: objValue) => void;
// userDetail = (id: idValue, userData: objValue)=>{
//     console.log(id);
//     console.log(userData.name);
//     console.log(userData.age); 
// }
// userDetail(5, {name: "Hasan", age:35})
let calculation;
calculation = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    }
    else {
        return "third perameter should be add";
    }
};
console.log(calculation(5, 5, "add"));
