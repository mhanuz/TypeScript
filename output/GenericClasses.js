"use strict";
// a tool which provides a way to create reusable components
class StudentInfo {
    constructor(id, Name) {
        this.Id = id;
        this.Name = Name;
    }
    display() {
        console.log(`${this.Id} ${this.Name}`);
    }
}
let st = new StudentInfo(101, "Hasan");
st.display();
