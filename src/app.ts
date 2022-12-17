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
  name: string;
  rollNo: number;
  private skills: string[] = [];

  constructor(n: string, rN: number) {
    this.name = n;
    this.rollNo = rN;
  }

  addSkills(skill: string) {
    this.skills.push(skill);
  }

  
}

const student1 = new Student("Shahzaib", 249);
student1.addSkills("Software");

console.log(student1);
