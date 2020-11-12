let buttonCountries = document.getElementsByClassName("button-countries");
let countryList = document.getElementById("item");


const getCountriesFromAtoZ = (e) =>{
let getCountries = randomPersonData.map(element => element.region);
let copyCountries =[];
getCountries.forEach(country =>{
    if (copyCountries.includes(country)){
    }else copyCountries.push(country)
});
copyCountries = copyCountries.sort((country) =>{
    let countryUL = document.createElement("li");
    countryUL.id = 'country-item';
    let pText = document.createElement("p");
    pText = country.region;
    countryUL.classList.add("pText");

    return country = countryUL;
});
copyCountries.forEach((countriesFromAtoZ) => {
    countryList.appendChild(countriesFromAtoZ);
});
};
getCountriesFromAtoZ();

buttonCountries.addEventlistener("click", getCountriesFromAtoZ);
