async function getData(){
    try{
        console.log("hello")
        state = document.querySelector("#statesName").value;
        url = `http://universities.hipolabs.com/search?name=${state}&country=india`

        let res = await fetch(url);
        res = await res.json()
       
        return res ; 
    }catch(e){
        console.log("error : " , e)
    }
}


let serachBtn = document.querySelector(".search");


serachBtn.addEventListener("click" , async()=>{
    try{
        
        let data = await getData();
      
        let list =document.querySelector(".list") ;
        list.innerHTML = "Universites : ";

        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            li.innerText = data[i].name;
            list.appendChild(li)
            
        }

    }
    catch(e){
        console.log("error : " , e);
    }
})