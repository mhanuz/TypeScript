// create multiple methods with the same name
// it can have the same number of parameters or less or more.
// if the parameter numbers is same then return type must be different  
// improves code readability and allows code reusability


function methodADD(p1: number, p2: number): number;
function methodADD(p1: string, p2: string): string;

function methodADD(p1: any, p2: any): any{
        return p1+p2;
}

console.log(methodADD(2,5));
console.log(methodADD("Hi"," 5"));

