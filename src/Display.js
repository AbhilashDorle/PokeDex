import React from "react";
import "./Display.css"
import Input from "./Input";
// import Location from "./Location";
import Encounter from "./Encounter"
import Moves from "./Moves"
import Evolution from "./Evolution"

export default function Display({pokemon, alt}){

    const [activeView, setActiveView] = React.useState('main')

    console.log(pokemon)

    function handleBack(){
        setActiveView('back')
    }

    // function handleLocation(){
    //     setActiveView('location')
    // }

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
             <div className="main-container">
                <Button label="Back" className="btn back-btn" onClick={handleBack}/>
                <div className="main-content-container">
                    {/* <Button label="Encounters" className="btn vertical-btn" onClick={handleAbilities}/> */}
                    <div className="image-container">
                        <Button label="EVOLUTION" className="btn horizontal-btn" onClick={handleEvolution}/>
                        
                        <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="img"
                        alt={alt}
                        />
                        <Button label="ENCOUNTER" className="btn horizontal-btn" onClick={handleAbilities}/>
                    </div>
                    <Button label="MOVES" className="btn vertical-btn" onClick={handleMoves}/>
                </div>
            </div>
    )

    return(
        <div>
            {activeView==='main' && renderMainView()}
            {/* {activeView==='location' && <Location pokemon={pokemon}/>} */}
            {activeView==='back' && <Input pokemon={pokemon}/>}
            {activeView==='abilities' && <Encounter pokemon={pokemon} name={alt} />}
            {activeView==='evolution' && <Evolution pokemon={pokemon} name={alt}/>}
            {activeView==='moves' && <Moves pokemon={pokemon} name={alt}/>}
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