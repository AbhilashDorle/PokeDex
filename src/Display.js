import React from "react";
import "./Display.css"
import Input from "./Input";
import Location from "./Location";
import Encounter from "./Encounter"
import Moves from "./Moves"
import Evolution from "./Evolution"

export default function Display({pokemon, alt}){

    const [activeView, setActiveView] = React.useState('main')

    console.log(pokemon)

    function handleBack(){
        setActiveView('back')
    }

    function handleLocation(){
        setActiveView('location')
    }

    function handleAbilities(){
        setActiveView('abilities')
    }

    function handleMoves(){
        setActiveView('moves')
    }

    function handleEvolution(){
        setActiveView('evolution')
    }


    const renderMainView = () => (
             <div>
                <Button label="Back" className="btn back-btn" onClick={handleBack}/>
                <div className="main-container">
                    <Button label="Encounters" className="btn vertical-btn" onClick={handleAbilities}/>
                    <div className="image-container">
                        <Button label="Moves" className="btn horizontal-btn" onClick={handleMoves}/>
                        <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="img"
                        alt={alt}
                        />
                        <Button label="Location" className="btn horizontal-btn" onClick={handleLocation}/>
                    </div>
                    <Button label="Evolution" className="btn vertical-btn" onClick={handleEvolution}/>
                </div>
            </div>
    )

    return(
        <div>
            {activeView==='main' && renderMainView()}
            {activeView==='location' && <Location pokemon={pokemon}/>}
            {activeView==='back' && <Input pokemon={pokemon}/>}
            {activeView==='abilities' && <Encounter pokemon={pokemon} name={alt} />}
            {activeView==='evolution' && <Evolution pokemon={pokemon}/>}
            {activeView==='moves' && <Moves pokemon={pokemon}/>}
        </div>
    )
}

function Button({ label, className, onClick }) {
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        {label}
      </button>
    );
  }