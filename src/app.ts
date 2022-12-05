// const button = document.querySelector("button")!

// function log(){
//     console.log("Clicked")
   
// }

// button.addEventListener("click",log)

// -----------------------------------------------


const button = document.querySelector("button")!

function log(data : string){
    console.log("Clicked" + data)
   
}

button.addEventListener('click', log)

//log("hello")
