// Enumerator (Enum) is a new Data types 
// used to set of named constants
// can be serialized and deserialized out of the box
//  to assign names to integral constants

enum Direction{
    up=1,
    down=9,
    left=6,
    right=3
}
console.log(Direction);

// enum is a function argument
enum Appstatus{
    active="yes",
    inactive=1,
    onhold=2,
    onstop="No"
}

function Checkstatus(status: Appstatus):void{
    console.log(status);
    
}

Checkstatus(Appstatus.onhold)
console.log(Appstatus.active);

enum Weekend {  
    Friday = 1,  
    Saturday,  
    Sunday  
  }  
  console.log(Weekend.Saturday);     
  console.log(Weekend["Friday"]);    
  console.log(Weekend[2]);    
