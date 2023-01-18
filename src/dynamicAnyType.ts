// skip type checking 
// when data type is unknow 
// allows us to assign literally any particular value

let i:any;
i= "hi";
i=5;

// array 

let ii: any[]=[];
ii.push(5);
ii.push("hi");
ii.push(false);
ii.push(undefined);

console.log(ii);
