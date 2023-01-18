"use strict";
// type-safe counterpart of the any
// to avoid the any type
// Just like all types are assignable to any, all types are assignable to unknown
let vAny = 10; // We can assign anything to any
let vUnknown = 10; // We can assign anything to unknown just like any 
let s1 = vAny; // Any is assignable to anything 
// let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
