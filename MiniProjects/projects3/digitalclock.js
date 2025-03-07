const clock = document.querySelector(".clock")
const new_date = new Date()

setInterval(function(){
const new_date = new Date()
clock.innerHTML = new_date.toLocaleTimeString()
} ,1000)