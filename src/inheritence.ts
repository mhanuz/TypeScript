// mechanism which acquires the properties and behaviors of a class from another class
// whose members are inherited is called the base class
// class that inherits those members is called the derived/child/subclass.
// supports only single inheritance and multilevel inheritance


//single inheritence
class Person1{
    
    constructor(public name: string, public age: number){
        this.name=name;
        this.age=age;
    }

    getBasicDetails(): string{
        return `${this.name} ${this.age}`
    }
}

class EmpDetails extends Person1 {

    constructor(public name: string, public age: number, public designation: string,  public salary: number){
        super(name,age)
    }
}


// mutli-level inheritence
class P1{
    constructor(public houseNo: number, public roadNo: number){
        this.houseNo= houseNo;
        this.roadNo= roadNo;
    }
    houseInfo(): string{
        return `House No: ${this.houseNo} and roadNo ${this.roadNo}`
    }
}

class P2 extends P1{
    constructor(public houseNo: number, public roadNo: number, public town: string, public policeStation: string){
        super(houseNo,roadNo)
    }
    houseInfo(): string { // method overriding
        return `House No: ${this.houseNo}, Road No :${this.roadNo}, Town: ${this.town}, Police Station: ${this.policeStation}`
    }
}

class P3 extends P2{
    constructor(public houseNo: number, public roadNo: number, public town: string, public policeStation: string, public city:string, public zipCode: number){
        super(houseNo,roadNo,town,policeStation)
    }
}


let address = new P3(23,12,"Mohammodpur","Hazaribag","Dhaka",1207);
console.log(address.houseInfo());
