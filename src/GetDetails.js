import React from "react";
import "./GetDetails.css";
import Display from "./Display";
import Input from "./Input";


export default function GetDetails(props) {
  const [pokemon, setPokemon] = React.useState(null);  // null for no data initially
  const [loading, setLoading] = React.useState(true);  // to track loading state
  const [error, setError] = React.useState(null);      // to store any errors

  React.useEffect(() => {
    // Reset state on new search
    setPokemon(null);
    setError(null);
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)  // Ensure name is lowercase
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokémon not found");  // Handle 404 or other errors
        }
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [props.name]);

  // Conditional rendering based on states (loading, error, data)
  return (
    <div>
      {loading && <p>Loading...</p>}  {/* Display loading message */}
      {error && 
        <div>
          <p className="error-para">Error: {error}</p>
          <Input />
        </div>}
      {pokemon && pokemon.sprites && pokemon.sprites.other.dream_world ? (
        <Display
          pokemon={pokemon}
          alt={props.name}
        />
      ) : null}
    </div>
  );
}