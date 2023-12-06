import React from 'react'
import './flightCard.css'
import RupeesIcon from '../../images/RupeesIcon'
import Arrow from '../../images/flightCardImage/Indigo6E.png'
const FlightCard = ({flightIcon, flightName, departureTime, departurePlace, travelTime, way, plus, minus, arrivalTime, arrivalPlace, price}) => {
    return (
        <div>
            <div>
                <div className='flex flex-row items-center'>
                    <div><img src={flightIcon} /></div>
                    <div>
                        <div>{flightName}</div>
                        <div>{ }</div>
                    </div>
                    <div>
                        <div>{departureTime}</div>
                        <div>{departurePlace}</div>
                    </div>
                    <div>
                        <div>{travelTime}</div>
                        <div><img src={Arrow} /></div>
                        <div>
                            <span>{way}</span>
                            <span>{plus}</span>
                            <span>{minus}</span>
                            <span>stop</span>
                        </div>
                    </div>
                    <div>
                        <div>{arrivalTime}</div>
                        <div>{arrivalPlace}</div>
                    </div>
                    <div>
                        <div>
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
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Flight Details</div>
        </div>
    )
}

export default FlightCard