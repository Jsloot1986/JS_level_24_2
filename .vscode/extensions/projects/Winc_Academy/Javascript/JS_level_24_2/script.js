function pokemonsList(e){
    pokemonsArr.forEach(element =>{
        let listLi = document.createElement("li");
        listLi.innerHTML = element.name;
        listUl.appendChild(listLi);
    })
}

async function fetchPokemons(){
    let text = await fetch("https://pokeapi.co/api/v2/pokemon");
    let text2 = await text.json();
    let arr = text2.results;
    return arr;
}

async function getPokemon (url, pokemonName){
    console.log(url);
    text = await fetch(url);
    text2 = await text.json();
    console.log(text2.sprites.back_shiny);

    pokemonResult.innerHTML = "";
    let image = document.createElement('img');
    image.setAttribute("src", text2.sprites.back_shiny);
    image.setAttribute("width", "100%");
    image.setAttribute("alt", pokemonName)
    pokemonResult.appendChild(image);
}

async function makeListPokemons(result){
    let pokemonsChoiceButton = "";
    listUl.innerHTML = "";
    await result.forEach(element =>{
        let listLi = document.createElement("li");
        let buttonPokemonChoice = document.createElement('button');
        buttonPokemonChoice.innerHTML = "Show " + element.name;
        buttonPokemonChoice.classList.add("pokemonChoice");
        listLi.appendChild(buttonPokemonChoice);
        listUl.appendChild(listLi);
    })
    pokemonsChoiceButton = document.getElementsByClassName("pokemonChoice");
    pokemonsChoiceButtonArr = Array.from(pokemonsChoiceButton);
    console.log("total buttons :", pokemonsChoiceButton.length);
    pokemonsChoiceButtonArr.forEach((element, index) => element.addEventListener("click", function(e){ getPokemon(result[index].url)}));
}

let buttonPokemons = "";
let listUl = document.getElementById("pokemon");
let pokemonResult = document.getElementById("pokemonResult");
let pokemonsArr = fetchPokemons().then(result =>{
    buttonPokemons = document.getElementById("button-pokemon");
    buttonPokemons.addEventListener("click", function(e){ makeListPokemons(result)});
})