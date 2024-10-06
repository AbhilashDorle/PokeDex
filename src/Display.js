import React from "react";
import "./Display.css"
import Input from "./Input";

export default function Display({pokemon, alt}){

    const [goback, setGoBack] = React.useState(false)

    // console.log(pokemon)

    function handleClick(){
        setGoBack(true)
    }

    return(
        <div>
            { !goback && (
            <div>
                <button className="btn back-btn" onClick={handleClick}>Back</button>
                <div className="main-container">
                    <button className="btn vertical-btn">Abilities</button>
                    <div className="image-container">
                        <button className="btn horizontal-btn">Moves</button>
                        <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="img"
                        alt={alt}
                        />
                        <button className="btn horizontal-btn">Location</button>
                    </div>
                    <button className="btn vertical-btn">Evolution</button>
                </div>
            </div>)}
            {goback && <Input />}
        </div>
    )
}

//pokemon.sprites.other.dream_world.front_default