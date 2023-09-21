let pokemonIndex = Math.floor(Math.random() * 151)

function increaseClickEvent(){
    console.log("We are increasing!");
    pokemonIndex++;
    getPokemon(pokemonIndex);
}

function decreaseClickEvent(){
    console.log("We are decreasing!");
    pokemonIndex--;
    getPokemon(pokemonIndex);
}


console.log("Index js loaded! ", document)

function getPokemon(pokemonIndex){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
        .then(response => response.json())
        .then(pokemon => {
            updateDisplay(pokemon);
            console.log(pokemon.name)
        })
}

function updateDisplay(pokemon){
    let NameElement = document.querySelector('.poke-header')
    NameElement.innerHTML = pokemon.name
    let imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = `<img width="300px" src="${pokemon.sprites.front_default}" ><img/>`
}