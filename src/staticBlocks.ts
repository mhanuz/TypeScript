// static block used to initialize static property
// static block does not depend on consturtor, execute befor constructor
// initializing static variables or calling any static method


class StaticBlock {
  static id: number; // static property
  static post: string;
  static age: number = 35; // direct initialization


  static {
    StaticBlock.id =10; // static property initialization in static block
    StaticBlock.post = "SWE";
}


  constructor(public fname: string, public lname:string){
    this.fname=fname;
    this.lname=lname;
  }

 displayFullName(): string{
  return `FUll name ${this.fname} ${this.lname}`;
 }
}


console.log(StaticBlock.id); // static member dirctly accessable classname and dot notation

let staticblockobj = new StaticBlock("abid","roman");
console.log(staticblockobj.displayFullName());
//console.log(staticblockobj.id); instance can not acces static propery 





