const result=document.querySelectorAll(".result")
const arr=Array.from(result)
arr.map((item)=>{

    let i=0;
    let count=()=>{
        i++
        item.innerHTML=i
        if(i==item.dataset.saiful){
            clearInterval(stop)
        }
    }
    
    const stop=setInterval(() => {
        count()
    }, 2000/item.dataset.saiful);

})
// let i=0;

// const count=()=>{
//     i++
//     if(i==result.dataset.saiful){
//         clearInterval(thamo)
//     }
//     result.innerHTML=i;

// }

// const thamo=setInterval(() => {
//     count()
// }, 1000);