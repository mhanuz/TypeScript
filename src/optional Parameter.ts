// when it's not mandatory for that parameter to have a value
function showDetails(p1: string, p2: number, p3?:string ): void {
    console.log(p1,p2);
    if(p3 !==undefined){ // write only the parameter name don't check the condition with undefined, not good practice
        console.log(p3);
        
    }
}
showDetails("type",1010110);
showDetails("Hi",1,"hello");
