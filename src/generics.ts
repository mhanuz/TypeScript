// genereics: is a tool, create reusable component, Compile-Time Checking 
// works with variety of data types, provides type safety, Typecasting is not required
// Generics use a special kind of type variable <T> that denotes types

function identity<T>(p1: T): T{
    return p1;
}

let output1: string = identity<string>("Typescript generics");
let output2 = identity<number>(35);
console.log(output1);
console.log(output2);


function getItems<T>(items: T[]): T[]{ // T[] == Array<T>
    return new Array().concat(items);
}

let myNumArr=getItems<number>([1,2,3,4,5]); // argument type and return value are number
let myStringArr=getItems<string>(["A","B","C"]); // // argument type and return value are string
myNumArr.push(6);
console.log(myNumArr);

//multi type variables
function multiTypeVariable<T,U>(id:T, name:U):void{
    console.log(typeof(id), typeof(name));
}

multiTypeVariable<string,number>("HI",5)


function genericWithNonGenereic<T>(id: T, name: string): void {
    console.log(typeof(id), typeof(name));
}

genericWithNonGenereic<number>(1,"Rocky");

