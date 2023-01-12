"use strict";
// const button = document.querySelector("button")!
// function log(){
//     console.log("Clicked")
// }
// button.addEventListener("click",log)
// -----------------------------------------------
//function binding method
//...
// const button = document.querySelector("button")!
// function log(data : string){
//    console.log("Clicked" + data)
// }
// button.addEventListener('click', log.bind(null, 'pressed')
//...
//log("hello")
//.......................................
//Classes
class Student {
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
        // name: string;
        // rollNo: number;
        // private skills: string[] = [];
        // constructor(n: string, rN: number) {
        //   this.name = n;
        //   this.rollNo = rN;
        // }
        // below is shorthand initialization- a technique provided by TS itself
        this.skills = [];
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
    getSkills() {
        return this.skills;
    }
}
//Inheritance
class Volunteer extends Student {
    constructor(name, rollNumber) {
        super(name, rollNumber);
        this.canVolunteerIn = [];
    }
    addVolunteerSkills(skill) {
        this.canVolunteerIn.push(skill);
    }
    get willVolunteerIn() {
        return this.canVolunteerIn;
    }
}
const student1 = new Volunteer("Shahzaib", 249);
student1.addSkills("Software");
student1.addVolunteerSkills("Volunteer Attendence Marking");
console.log(student1);
console.log(student1.getSkills());
//# sourceMappingURL=app.js.map