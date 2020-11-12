function addcountry(country){
    line = document.createElement('li');
    line.innerHTML = country;
    buttonItem.appendChild(line);
}


function getCountriesFromAtoZ (e) {
   const countries =  randomPersonData.map(elm => elm.region);
    const countriesList = [];
    countries.forEach(country =>{
        if (countriesList.includes(country)){}
        else {countries.push(country)}
    });
    countries = countries.sort();
    buttonItem.innerHTML = "";
    countries.forEach(country => addCountry(country));
    if (buttonItem.classList.add("get"))
        buttonItem.classList.remove("show_img");
}

let buttonCountries = document.getElementById("button-countries");
let buttonItem = document.getElementById("button-item");
let line = "";
let country = "";

buttonCountries.addEventListener("click", getCountriesFromAtoZ);