type userId = number | string
type userInfo = {name: string, age: number}

const userDetails = (id: userId , user: userInfo)=>{
    console.log(`Used id is ${id} and name is ${user.name} and his age is ${user.age}`);  
}

const sayHello = (user: userInfo)=>{
    console.log(`name is ${user.name} and his age is ${user.age}`);
    
}
userDetails(5, {name: "hasan", age: 32});
