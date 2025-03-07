
document.addEventListener("DOMContentLoaded" ,()=>{
    const getbtn = document.getElementById("getWeatherbtn");
    const cityinput = document.getElementById("cityInput");
    const cityDisplay = document.getElementById("city-name")
    const temprature = document.getElementById("temprature")
    const discription = document.getElementById("discription")
    const ErrorMsg = document.getElementById("ErrorMsg") ;
    const result = document.getElementById("result") ;

    const API_KEY = "1472b941698b0346d5e14387ced47e27";


    getbtn.addEventListener("click" , async (e)=>{
        const city = cityinput.value.trim()
        if(!city) return ;
        try{
            const weatherdata = await fetchWeatherData(city);
            displayweatherData(weatherdata);
        }catch(error){
            // ErrorMsg.textContent += `${error}`
            showError();
        }
   
     })

    async function fetchWeatherData(city){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        let response = await fetch(url);
       
        if(!response.ok) {
            throw new Error("city is not found");
        }

        const data = response.json()
        console.log(data)

        return data;
     }

     function displayweatherData(data){
        const {name , main , weather} = data ;
        cityDisplay.textContent = name;
        temprature.textContent =`temperature : ${main.temp}` ;
        discription.textContent = `${weather[0].description} wind : ${data.wind.speed} km/s` ;

        result.classList.remove("hidden")
        ErrorMsg.classList.add("hidden")
     }

     function showError(){
        result.classList.add("hidden")
        ErrorMsg.classList.remove("hidden")
     }

});