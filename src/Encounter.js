import React from "react"
import "./Encounter.css"
import Display from "./Display";

export default function Encounter({ pokemon, name}){
    const [encounter, setEncounter] = React.useState([])
    const [locationArray, setLocationArray] = React.useState([]);
    const [back, setBack] = React.useState(false)

    React.useEffect(() => {
        // Make sure `pokemon.id` is available before making the fetch call
        if (pokemon && pokemon.id) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
            .then((res) => res.json())
            .then((data) => {
                setEncounter(data)
                
                const locations = data.map((encounter) => encounter.location_area.name);
                setLocationArray(locations);
            })
            .catch((error) => console.error("Error fetching encounter data:", error));

            
        }
      }, [pokemon]);

      function handleBack(){
        setBack(true)
      }

      const currView = () => (
        <div className="encounter-main-container">
          <button className="encounter-back-btn" onClick={handleBack}>Back</button>
          <h1 className="encounter-heading">Encounter Locations</h1>
          <ul className="encounter-main-list-container">
            {locationArray.length > 0 ? (
              locationArray.map((location, index) => (
                <li key={index} className="encounter-list-containers">{location}</li>
              ))
            ) : (
              <p className="encounter-para">No encounter locations available.</p>
            )}
          </ul>
        </div>
      )


      return (
        <div className="encounter-main-container">
          {!back && currView()}
          {back && 
            <Display 
              pokemon={pokemon}
              alt={name}/> }
          
        </div>
      )
}




