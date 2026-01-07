const input=document.querySelector("input")
const head=document.querySelector("h1")
const btn=document.querySelector("button")



input.addEventListener("input",()=>{
    btn.addEventListener("click",()=>{
        let man=   head.innerHTML=(input.value) 
           localStorage.setItem("saiful",man)
    
})
 
})

