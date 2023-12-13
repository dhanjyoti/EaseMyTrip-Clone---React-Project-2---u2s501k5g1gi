import React from 'react'
import './flightCard.css'
import RupeesIcon from '../../images/RupeesIcon'
import Arrow from '../../images/flightCardImage/arow_main.png'

const FlightCard = ({ flightIcon, flightName, flightNumber, departureTime, departurePlace, travelTime, way, plus, minus, stop, arrivalTime, arrivalPlace, price }) => {
    return (
        <div className='border-2 border-gray-500 flex flex-col items-start px-4 py-2 my-[10px]'>
            <div className='flex flex-row items-center gap-24 pl-2'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='w-12 h-12 flex items-center'><img className='pr-3' src={flightIcon} /></div>
                    <div>
                        <div>{flightName}</div>
                        <div>{flightNumber}</div>
                    </div>
                </div>
                <div>
                    <div>{departureTime}</div>
                    <div>{departurePlace}</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>{travelTime}</div>
                    <div><img src={Arrow} /></div>
                    <div>
                        <span>{way}</span>
                        <span>{plus}</span>
                        <span>{minus}</span>
                        <span>{stop}</span>
                    </div>
                </div>
                <div>
                    <div>{arrivalTime}</div>
                    <div>{arrivalPlace}</div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <span><RupeesIcon /></span>
                        <strong className='price'>{price}</strong>
                    </div>
                    <div>
                        <button className='morefare-button'>+ More Fare</button>
                    </div>
                    <div></div>
                </div>
                <div>
                    <button className='py-[6px] px-3 rounded-full text-white bg-[#ef6614]'>
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div>Flight Details</div>
        </div>
    )
}

export default FlightCard