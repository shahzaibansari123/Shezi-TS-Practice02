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

  constructor(public name: string, public rollNumber: number) {}

  addSkills(skill: string) {
    this.skills.push(skill);
  }

  getSkills() {
    return this.skills;
  }
}

class Volunteer extends Student {

  canVolunteerIn: string[] = [];
  
  constructor(name: string, rollNumber: number) {
    super(name, rollNumber);
  }
}

const student1 = new Student("Shahzaib", 249);
student1.addSkills("Software");
// student1.addSkills("Javascript");

console.log(student1);
console.log(student1.getSkills());
