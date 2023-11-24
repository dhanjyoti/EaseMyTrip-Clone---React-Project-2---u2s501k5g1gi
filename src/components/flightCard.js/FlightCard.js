import React from 'react'
import "./flightCard.css"
import RupeesIcon from '../../images/RupeesIcon'

const FlightCard = ({place, date, flightName, price}) => {
  return (
    <div className='flex flex-row justify-between items-center line'>
        <div className='flex flex-col items-start'>
            <p className='head'>To {place}</p>
            <div>
                <span>{date}</span> 
                <span> | </span>
                <span>{flightName}</span>
            </div>
        </div>
        <div className='flex flex-row items-center'>
          <span>One way as low as</span> 
          <span><RupeesIcon/></span>
          <strong className='price'> {price}</strong>
        </div>
        <div>
            <button className='booking-button'>BOOK NOW</button>
        </div>
    </div>
  )
}

export default FlightCard