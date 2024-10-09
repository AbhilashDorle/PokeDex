import React from "react";
import "./GetDetails.css";
import Display from "./Display";

export default function GetDetails(props) {
  const [pokemon, setPokemon] = React.useState({});

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [props.name]); // Add props.name as a dependency

  return (
    <div>
      {pokemon.sprites && pokemon.sprites.other.dream_world ? (
        <Display
          pokemon={pokemon}
          alt={props.name}
        />
      ) : (
        <p>Loading...</p> // Fallback while loading
      )}
    </div>
  );
}
