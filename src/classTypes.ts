class UserInformation{
    constructor(
        private name: string,
        readonly dept: string,
        public experience: number,
        public salary: number
    ){

    }

    MyInfo(){
        console.log(`Name: ${this.name}, Dept: ${this.dept}, Experience: ${this.experience}, and salary = ${this.salary}`);
    }

}

const mashrafee = new UserInformation("mashrafee", "bowler", 10, 30000);
const shakib = new UserInformation("shakib", "allrounder", 5, 25000);


const employee: UserInformation[]=[];
employee.push(mashrafee)
employee.push(shakib)

console.log(mashrafee.dept);


