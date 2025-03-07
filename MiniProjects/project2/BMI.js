
const answer = document.querySelector(".answer")
const button = document.querySelector("button")
const under =  document.querySelector("#under")
const good = document.querySelector("#good")
const over = document.querySelector("#Over")

button.addEventListener("click" ,(e)=>{
    under.style.backgroundColor ="white";
    under.style.color ="black";
    good.style.color ="black";
    good.style.backgroundColor ="white";
    over.style.backgroundColor ="white";
    over.style.color ="black";

    const weight = document.querySelector("#inp1")
    const height = document.querySelector("#inp2")
    let m = parseInt(weight.value)
    let n = parseInt(height.value)

    answer.innerText = ((m*10000)/(n*n)).toFixed(2);
    if(answer.innerText < 18.5){
       under.style.backgroundColor = "green" ;
        under.style.color = "yellow" ;
    }
    else if(answer.innerText >= 18.5 && answer.innerText <= 25.9){
        good.style.backgroundColor = "green" ;
        good.style.color = "yellow" ;
    }
    else if(answer.innerText > 25.9){
       over.style.backgroundColor = "green" ;
        over.style.color = "yellow" ;
    }
    
})
