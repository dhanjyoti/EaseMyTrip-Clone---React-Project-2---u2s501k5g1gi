import React from 'react'
import "./flightRouteCard.css"
import RupeesIcon from '../../images/RupeesIcon'

const FlightRouteCard = ({place, date, flightName, price}) => {
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
          <span>One way as low as&nbsp;&nbsp;</span> 
          <span><RupeesIcon/></span>
          <strong className='price'>{price}</strong>
        </div>
        <div>
            <button className='booking-button'>BOOK NOW</button>
        </div>
    </div>
  )
}

export default FlightRouteCard