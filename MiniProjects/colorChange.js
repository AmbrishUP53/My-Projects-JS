const box = document.querySelectorAll(".boxes")
const body = document.querySelector("body")

console.log(box)

box.forEach((b) =>{
    b.addEventListener("click", function(e){
        if (e.target.id =="skyBlue" ){
            body.style.backgroundColor = e.target.id ;
            body.style.color = "purple"
        }

        if (e.target.id ==="Grey" ){
            body.style.backgroundColor = e.target.id;
            body.style.color ="red"
        }
        if (e.target.id ==="Black" ){
            body.style.backgroundColor = e.target.id;
             body.style.color ="white"
        }
        if (e.target.id ==="White" ){
            body.style.backgroundColor = e.target.id;
             body.style.color ="Black"
        }
        if (e.target.id ==="Pink" ){
            body.style.backgroundColor = e.target.id;
             body.style.color ="green"
        }
        if (e.target.id ==="lightgreen" ){
            body.style.backgroundColor = e.target.id;
             body.style.color ="brown"
        }
    });
});



