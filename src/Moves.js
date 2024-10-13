import React from "react"
import Display from "./Display";
import "./Moves.css"

export default function Moves({pokemon, name}){

    const [back, setBack] = React.useState(false)
    
    const data = pokemon.moves

    const movesArray = data.map((moveData) => moveData.move.name);

    function handleBack(){
        setBack(true)
      }


    const currView = () => (
        <div className="moves-main-container">
          <button className="moves-back-btn" onClick={handleBack}>Back</button>
          <h1 className="moves-heading">Moves</h1>
          <ul className="moves-main-list-container">
            {movesArray.length > 0 ? (
              movesArray.map((moves, index) => (
                <li key={index} className="moves-list-containers">{moves}</li>
              ))
            ) : (
              <p className="moves-para">No moves available.</p>
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