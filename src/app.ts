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
  // name: string;
  // rollNo: number;
  // private skills: string[] = [];

  // constructor(n: string, rN: number) {
  //   this.name = n;
  //   this.rollNo = rN;
  // }

  // below is shorthand initialization- a technique provided by TS itself

  private skills: string[] = [];

  constructor(public name: string, public readonly rollNumber: number) {}

  addSkills(skill: string) {
    this.skills.push(skill);
  }

  getSkills() {
    return this.skills;
  }
}

//Inheritance

class Volunteer extends Student {
  private canVolunteerIn: string[] = [];

  //static Method
  static studentID: string = "abc-123"

  constructor(name: string, rollNumber: number) {
    super(name, rollNumber);
  }

  addVolunteerSkills(skill: string) {
    this.canVolunteerIn.push(skill);
  }

  //getter & setter

  get willVolunteerIn() {
    return this.canVolunteerIn;
  }

  set willVolunteerIn(skills: string[]) {
    for (const skill of skills){
      if(!skill){
        return;
      }
    }
   this.canVolunteerIn = skills;
  }
}

const student1 = new Volunteer("Shahzaib", 249);

student1.addSkills("Software");
student1.addVolunteerSkills("Volunteer Attendence Marking");

console.log(student1);
console.log(student1.getSkills());

student1.willVolunteerIn =['ABC'];
console.log(student1.willVolunteerIn);

console.log(Volunteer.studentID)
