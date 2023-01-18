// to get the type of resolve of a promise
// unwrap the type
// unwrap: extracting inner type from another type
// copy the js await behavior 
type promiseString = Promise<string>;
type awaitedPromiseString = Awaited<promiseString>

type Awaited<T> = T extends null | undefined ? T: // first check the type, if the type is null or undefined will return it

// Recursive check is it then able or not 
T extends object & {then(onfullfilled:infer F): any} ?
    F extends ((value: infer V, ...args:any )=> any) ?
    Awaited<V> : // recursively unwrap the value 
    never:  // the argument to then was not callable 
    T; // Non thanable 


    interface ArrayLike<T> {
        readonly length: number;
        readonly [n: number]: T;
    }