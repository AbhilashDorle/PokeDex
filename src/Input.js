import React from 'react'
import './Input.css'
import GetDetails from './GetDetails'


export default function Input(){

    const [pokemonName, setPokemonName] = React.useState('')
    const [inputFlag ,setInputFlag] = React.useState(false)
    
    function handleClick(){
        if(pokemonName.length!==0)
            setInputFlag(true)
    }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleClick(); // Trigger submit button logic
        }
      };
      
    const handleChange = event => setPokemonName(event.target.value.toLowerCase())
        
    return(
        <div className='main-input-container'>
            {!inputFlag &&
            <div className='div-input'>
                <input 
                    type='text' 
                    placeholder='Enter pokemon name' 
                    className='main-input' 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}></input>
                <button onClick={handleClick} className='submit-btn'>Submit</button>
            </div>}
            {inputFlag && <GetDetails name={pokemonName}/>}
        </div>
    )
}