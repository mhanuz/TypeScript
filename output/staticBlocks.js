"use strict";
// static block used to initialize static property
// static block does not depend on consturtor, execute befor constructor
// initializing static variables or calling any static method
class StaticBlock {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fname = fname;
        this.lname = lname;
    }
    displayFullName() {
        return `FUll name ${this.fname} ${this.lname}`;
    }
}
StaticBlock.age = 35; // direct initialization
(() => {
    StaticBlock.id = 10; // static property initialization in static block
    StaticBlock.post = "SWE";
})();
console.log(StaticBlock.id); // static member dirctly accessable classname and dot notation
let staticblockobj = new StaticBlock("abid", "roman");
console.log(staticblockobj.displayFullName());
//console.log(staticblockobj.id); instance can not acces static propery 
