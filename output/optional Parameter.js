"use strict";
// when it's not mandatory for that parameter to have a value
function showDetails(p1, p2, p3) {
    console.log(p1, p2);
    if (p3 !== undefined) {
        console.log(p3);
    }
}
showDetails("type", 1010110);
showDetails("Hi", 1, "hello");
