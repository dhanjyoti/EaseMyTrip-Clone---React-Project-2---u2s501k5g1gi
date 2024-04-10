import React from 'react'
import "./flightRouteCard.css"
import RupeesIcon from '../../images/RupeesIcon'
import { Link } from 'react-router-dom'

const FlightRouteCard = ({place, date, flightName, price}) => {
  return (
    <div className='flex flex-row justify-between items-center line mb-3'>
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
        <Link to={"/under-construction"}>
            <button className='booking-button'>BOOK NOW</button>
        </Link>
    </div>
  )
}

export default FlightRouteCard