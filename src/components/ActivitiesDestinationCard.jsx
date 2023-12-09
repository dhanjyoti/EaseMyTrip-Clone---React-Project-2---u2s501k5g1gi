import React from 'react'
import "./activities.css"

const ActivitiesDestinationCard = ({place, placeName}) => {
  return (
    <div className='main-div'>
        <div className='image-div'>
            <img src={place} className='image' />
        </div>
        <div className='img-Place'>
            <p className='image-para'>{placeName}</p>
        </div>
    </div>
  )
}

export default ActivitiesDestinationCard