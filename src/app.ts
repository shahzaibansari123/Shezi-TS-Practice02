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

//now implementing abstract class means all extended class have to define thier method in it

// abstract class Student {
//   // name: string;
//   // rollNo: number;
//   // private skills: string[] = [];

//   // constructor(n: string, rN: number) {
//   //   this.name = n;
//   //   this.rollNo = rN;
//   // }

//   // below is shorthand initialization- a technique provided by TS itself

//   private skills: string[] = [];

//   constructor(public name: string, public readonly rollNumber: number) {}

//   // addSkills(skill: string) {
//   //   this.skills.push(skill);
//   // }

//   //abstract method
//   abstract addSkills(skill: string): void;

//   getSkills() {
//     return this.skills;
//   }
// }

// //Inheritance

// class Volunteer extends Student {
//   private canVolunteerIn: string[] = [];

//   //static Method
//   static studentID: string = "abc-123";

//   constructor(name: string, rollNumber: number) {
//     super(name, rollNumber);
//   }

//   addVolunteerSkills(skill: string) {
//     this.canVolunteerIn.push(skill);
//   }

//   // calling abstract method in child  or extended class
//   addSkills() {}

//   //getter & setter

//   get willVolunteerIn() {
//     return this.canVolunteerIn;
//   }

//   set willVolunteerIn(skills: string[]) {
//     for (const skill of skills) {
//       if (!skill) {
//         return;
//       }
//     }
//     this.canVolunteerIn = skills;
//   }
// }

// const student1 = new Volunteer("Shahzaib", 249);

// // student1.addSkills("Software");
// student1.addVolunteerSkills("Volunteer Attendence Marking");

// console.log(student1);
// console.log(student1.getSkills());

// student1.willVolunteerIn = ["ABC"];
// console.log(student1.willVolunteerIn);

// console.log(Volunteer.studentID);


//-----------------------------------------------------------


//Singleton Patterns
// (the class should have only once object or initialization) 

class Human{
  static object: Human;
  
  //private constructor mesn that tha class wont be able to make an object atleast outside
  private constructor(private name: string){

  }

  static getObject(name: string){
    if(this.object){
      return this.object;
    }

    this.object = new Human(name)
    return this.object
  }
}

const user1= Human.getObject("Shezi")

const user2= Human.getObject("Rushal")

//as you can see it will store only first value on console and you wont be able to store second one
console.log(user1, user2)