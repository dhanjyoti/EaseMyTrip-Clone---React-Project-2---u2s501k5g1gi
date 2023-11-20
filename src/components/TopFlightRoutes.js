import React from 'react'
import IconAirplane from '../images/IconAirplane'

const TopFlightRoutes = ({image, takeOff, landing, routeCode}) => {
  return (
    <div className='flex flex-row'>
        <div><img src={image} /></div>
        <div>
            <div className='flex flex-row items-center'>
                <span>{takeOff}</span>
                <span><IconAirplane/></span>
                <span>{landing}</span>
            </div>
            <div>{routeCode}</div>
        </div>
    </div>
  )
}

export default TopFlightRoutes;