import React from 'react'
import "./pagination.css"

const Pagination = ({index,handlePrev,handleNext}) => {
  return (
        <div className='Pagination'>
            <button className='button-prev' disabled={index <= 1 ? true : false} onClick={handlePrev}>◄ Prev</button>
            <button className='button-next' disabled={index >= 42 ? true : false} onClick={handleNext}>Next ►</button>
        </div>
  )
}

export default Pagination
