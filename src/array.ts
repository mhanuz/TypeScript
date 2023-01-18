// maintain large sets of data under a single variable name: easy access, no prolblem with memory allocation
// array declaration 
let array1: number []= [1,2,3,4,5];
let array2: Array<number> = [...array1,6,7,8,9,10];
console.log(array2);


//multi-dimensonal array
let multiDArray1: number[][]=[[],[]];
console.log(multiDArray1);

multiDArray1=[[1,2,3],[4,5,6]]
console.log(multiDArray1);



//array object
let arr_obj: string[] = new Array("Typescript","Javascript","Python","Java");
for (let i=0; i<arr_obj.length; i++){
    console.log(arr_obj[i]);
    
}

let iii:any;


let arrAsAFunction: number []=[1,2,3,4,5,6];
function myFunction(arrAsAFunction: number[]){
    for(let i=0; i<arrAsAFunction.length; i++){
        console.log(arrAsAFunction[i]);  
    }
}
myFunction(arrAsAFunction);


// different ways to declare array

// fill method: 
// array object will create an array with "empty" 
// every element will fill (replace with "empty") with "hello"
// fill method useful for string, number, boolean
let fillArrayWithString = new Array(10).fill('hello'); 
console.log("Array fill method with string:", fillArrayWithString);

let fillArrayWithObject = new Array(10).fill({language:"TypeScript"}) // all the objects are same: 
console.log("Array fill method with object",fillArrayWithObject);  // fill method used the refference of the array object

fillArrayWithObject[0]={language:"JavaScript"} // changing  a specific element of this array not the object refference
console.log(fillArrayWithObject)

// without fill method
let fillEmptyArray = new Array(10);
console.log(fillEmptyArray);

// intialize with loop
let len = fillEmptyArray.length;
for(let i=0; i< len; i++){
    fillEmptyArray[i] = {company:"ESS"}
}
console.log(fillEmptyArray);


// from method
// first parameter(object): set the length of array
// second parameter(function): fill the array with function result
let arrayDeclarationWithFrom = Array.from({length:10},()=>({language:"Python"}));
console.log(arrayDeclarationWithFrom);

// using spread syntax
let arrayUsingSpread = [...new Array(10)].map(()=>({language:"C#"})) // expand or create new array
console.log(arrayUsingSpread); // not recomendded beacuse of map mathod 


















