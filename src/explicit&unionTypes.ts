// when a value can be more than a single type.
// 
let a:string;
a = "hello";

let b: string | number;
b = "string value";
b = 35;


let myArray3: string[] = [];
myArray3.push("hi")
console.log(myArray3);

let myObj3:{};
myObj3 = {
    carName: "Volvo",
    year: 2017
}

let myObj2: {
    firstName: string,
    lastName: string,
    age: number
}  

let myObj4: object;

myObj4 = {
    inst: "DU",
    passYear: 2019,
    dept: "CSE"
}

myObj2 = {
    firstName: "Imran",
    lastName: "Hasan",
    age: 35
}








