import React from "react";

export default function Display(props){

    const [pokemon, setPokemon] = React.useState({})
    React.useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then(res=>res.json())
        .then(data=>setPokemon(data))
    },[])

    console.log(pokemon)

    return(
        <img src={pokemon.sprites.front_shiny}></img>
    )
}