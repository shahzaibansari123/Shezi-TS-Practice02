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
   skills: string[]=[];




 
   
   constructor (n: string , rN: number){
      this.name = n;
      this.rollNo= rN;
      }
   }


const student1 = new Student("Shahzaib", 249)
console.log(student1)
