let listOfPokemon = [];
let pokeRNG;


function call() {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon"

    }).done(function (data) {
        console.log(data);

        gather(data);


        pokeRNG = (Math.floor((Math.random() * (listOfPokemon.length))));
        console.log(pokeRNG);
    }).fail(function (data) {
        console.log(data)
    })

}

call();

function gather(pokeArray) {
    for (let i = 0; i < pokeArray.results.length; i++) {
        console.log(pokeArray.results[i]);
        listOfPokemon.push(pokeArray.results[i]);
    }
    console.log(listOfPokemon);

}

function callSpecific(pokeID, pokemon){
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokeID}`

    }).done(function (pokeData) {
        console.log(pokeData);

        $("#house").append(`<div class="col">
                        <div class="p-3 border bg-light my-4 d-flex flex-row flex-wrap justify-content-between">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeRNG + 1}.png">
                        <div id="pokeName" class="display-5">${pokemon.name.toUpperCase()}</div>
                        <div class="">
                            <ul class="list-group">
                                <li class="list-group-item">Base XP: ${pokeData.base_experience} </li>
                                <li class="list-group-item">Height: ${pokeData.height} </li>
                                <li class="list-group-item">Weight:  ${pokeData.weight} </li>
                            </ul>
                        </div>
                    </div>
                </div>`);
        pokeRNG = (Math.floor((Math.random() * (listOfPokemon.length))));

    }).fail(function (data) {
        console.log(data)
    })
}


$("#generate").click(function () {
    let pokemon = listOfPokemon[pokeRNG];
    console.log(pokemon)

    let pokeData = callSpecific(pokeRNG + 1, pokemon);
    console.log(pokeData);

});

$("#clear").click(function(){
    $("#house").html("");
})