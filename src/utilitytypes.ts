// use:  handling function types from external libraries and want to build custom types based on them


// await utility type
// this emulates the behaviors of await 
// recursively unwraps the awaited type of a type

type wrappedInDeep = Promise<Promise<Promise<Promise<Promise<string>>>>>;
type AwaitedResult = Awaited<wrappedInDeep>;



// partial type : properties can be changed partially 
interface myInfo{
    name: string;
    age: number
}

function utilityPartialType(myInfo: myInfo, updateMyInfo: Partial<myInfo>){
    return {...myInfo, ...updateMyInfo}
}

const myInfo1 = {
    name: "hasan tanvir",
    age: 30
}

const myInfo2 = utilityPartialType(myInfo1,{
    age:25,
}
)

const myInfo3 = utilityPartialType(myInfo1,{
    name:"imran",
    age: 35
})

// required type
interface fullName{
    fName?: string;
    lName?: string;
}

const obj4: fullName = {fName:"abir"}
const obj5: Required<fullName> = {fName:"hashim",lName:"amla"} // error will generetate if i donot give any one property value.

// read only: reassign is not allowed
const obj6: Readonly<fullName>= {fName:"hashim",lName:"amla"} 

//obj6.fName="new name";

// Pick 
type fullNamePreview = Pick<fullName, "fName">

const obj7: fullNamePreview ={
    fName:"Hashim"
}

// Ommit

interface personalDetails {
    name: string;
    title: string;
    post: string;
    salary: number;
    experience: number
}

type omitPersonalDetails = Omit <personalDetails, "salary" | "experience">

const obj8: omitPersonalDetails ={
    name: "abul",
    title: "hossain",
    post: "SWE"
}