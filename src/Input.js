import React from 'react'
import './Input.css'
import Display from './Display'


export default function Input(){

    const [pokemonName, setPokemonName] = React.useState('')
    const [inputFlag ,setInputFlag] = React.useState(false)
    
    function handleClick(){
        if(pokemonName.length!==0)
            setInputFlag(true)
    }
    
    const handleChange = event => setPokemonName(event.target.value)
        
    return(
        <div>
            {!inputFlag &&
            <div className='div-input'>
                <input type='text' placeholder='Enter pokemon name' className='main-input' onChange={handleChange}></input>
                <button onClick={handleClick} className='submit-btn'>Submit</button>
            </div>}
            {inputFlag && <Display name={pokemonName}/>}
        </div>
    )
}