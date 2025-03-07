
let dropdowns = document.querySelectorAll(".dropdown select");



for(let el of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
            el.append(newOption);

    }
    
}
