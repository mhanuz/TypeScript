// block of code
// specific task 
// code reuse

const myFunc= (a: number, b:number, c:string ="Done")=>{
    return a + b;
}
console.log(myFunc(4, 5));


const myFunc2 = (a: string, b: string):string =>{
    return `${a} and ${b}`;
}

console.log(myFunc2("imran","hasan"));
