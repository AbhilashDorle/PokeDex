import React from 'react'
import './Display.css'

export default function Display(){

    const [name, setName] = React.useState("")

    React.useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(res=>res.json())
        .then(data=>setName(data))
    },[])
    console.log(name)    
    return(
        <div className='div-input'>
            <input type='text' placeholder='Enter pokemon name' className='main-input'></input>
            <p>{JSON.stringfy(name, null, 2)}</p>
        </div>
    )
}