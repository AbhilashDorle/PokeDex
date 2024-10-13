import React from "react"
import Display from "./Display";
import "./Evolution.css"

export default function Evolution({ pokemon, name }) {
    const [evolutionChain, setEvolutionChain] = React.useState([]);
    const [back, setBack] = React.useState(false)

    React.useEffect(() => {
        async function fetchEvolutionData() {
            try {
                const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
                const speciesData = await speciesResponse.json();

                const evolutionChainUrl = speciesData.evolution_chain.url;
                const evolutionResponse = await fetch(evolutionChainUrl);
                const evolutionData = await evolutionResponse.json();

                let chain = evolutionData.chain;
                let evolutions = [];
                while (chain) {
                    evolutions.push(chain.species.name);
                    chain = chain.evolves_to[0];
                }
                setEvolutionChain(evolutions);
            } catch (error) {
                console.error("Error fetching evolution chain:", error);
            }
        }

        fetchEvolutionData();
    }, [name]);

    function handleBack(){
        setBack(true)
      }


    const currView = () => (
        <div className="evol-main-container">
          <button className="evol-back-btn" onClick={handleBack}>Back</button>
          <h1 className="evol-heading">Evolution</h1>
          <ul className="evol-main-list-container">
            {evolutionChain.length > 0 ? (
              evolutionChain.map((evols, index) => (
                <li key={index} className="moves-list-containers">{evols}</li>
              ))
            ) : (
              <p className="moves-para">No evolution available.</p>
            )}
          </ul>
        </div>
      )


      return (
        <div className="moves-main-container">
          {!back && currView()}
          {back && 
            <Display 
              pokemon={pokemon}
              alt={name}/> }
        </div>
      )
}