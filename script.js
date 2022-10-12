let currentPokemon;
let selectedPokemon;

async function loadPokemon(){

    
    selectedPokemon = 'charmander';

    let url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    
    let response = await fetch(url);
    currentPokemon = await response.json();
    
    console.log(currentPokemon);

    renderPokemoninfo();


}

function renderPokemoninfo(){

    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonPicture').src = currentPokemon['sprites']['front_default'];
    
}