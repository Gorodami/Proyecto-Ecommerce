import React from 'react'
import "./Characts.css"
const Characts = ({background_image, name, description, rating , id, results}) => {
  
    
    return (
        <div className='api-games-container'>
            <div className='api-games-info'>
                <h1 className='api-title'>{name}</h1>
                <h3 className='rating'>{rating}★</h3>
                <h1 className="description">{description}</h1>

            </div>
            <img className='api-img' src={background_image}/>
         </div>

        
)
}

export default Characts;
