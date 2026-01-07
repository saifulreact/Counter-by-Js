const result=document.querySelector(".result")
let i=0;

const count=()=>{
    i++
    if(i==result.dataset.saiful){
        clearInterval(thamo)
    }
    result.innerHTML=i;

}

const thamo=setInterval(() => {
    count()
}, 1000);