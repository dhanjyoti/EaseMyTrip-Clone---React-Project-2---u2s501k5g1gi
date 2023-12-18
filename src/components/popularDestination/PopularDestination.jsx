import React from 'react'
import './populardestination.css'

const PopularDestination = ({image, place, price}) => {
  return (
    <div className='main-div mr-3 max-w-[220px] flex flex-col items-center '>
        <div>
          <img className='rounded-md' src={image} />
        </div>
        <div>
          <div className='text-center text-lg font-semibold'>{place}</div>
          <div className='text-xs text-center py-1 font-medium'>Starting at ₹{price}</div>
        </div>
    </div>
  )
}

export default PopularDestination;