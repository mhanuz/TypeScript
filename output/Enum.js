"use strict";
// Enumerator (Enum) is a new Data types 
// used to set of named constants
// can be serialized and deserialized out of the box
//  to assign names to integral constants
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 9] = "down";
    Direction[Direction["left"] = 6] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
// enum is a function argument
var Appstatus;
(function (Appstatus) {
    Appstatus["active"] = "yes";
    Appstatus[Appstatus["inactive"] = 1] = "inactive";
    Appstatus[Appstatus["onhold"] = 2] = "onhold";
    Appstatus["onstop"] = "No";
})(Appstatus || (Appstatus = {}));
function Checkstatus(status) {
    console.log(status);
}
Checkstatus(Appstatus.onhold);
console.log(Appstatus.active);
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = 2] = "Saturday";
    Weekend[Weekend["Sunday"] = 3] = "Sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend.Saturday);
console.log(Weekend["Friday"]);
console.log(Weekend[2]);
