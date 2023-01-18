// a tool which provides a way to create reusable components
class StudentInfo<T,U>{
    public Id:T;
    public Name:U;

    constructor(id:T, Name:U){
        this.Id=id;
        this.Name=Name;
    }
    display():void{
        console.log(`${this.Id} ${this.Name}`);
        
    }
}

let st= new StudentInfo<number,string>(101,"Hasan");
st.display();