import React from 'react'
import "./Characts.css"
const Characts = ({background_image, name, description, rating , results}) => {
  
    
    return (
        <div className='card-characters'>
            <div className='card-img-characters'>
                <img className='img-characters' src={background_image} alt={name} />
            </div>
            <div className='card_data-characters'>
                <h3>{name}</h3>
                <h1 className='p-characters'>{rating}</h1> 
                <p>{results}</p>
                </div>
        </div>
)
}

export default Characts;
