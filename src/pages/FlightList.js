import React from 'react'
import SwapNewIcon from '../images/flightCard/swap-nw-icn.png'
import '../styles/flight.css'

const FlightList = () => {
    return (
        <div>
            <div>
                <div className='back-ground'>
                    <div className='flex flex-row'>
                        <div>
                            <ul className='flex flex-row'>
                                <li>
                                    <label>
                                        <input name='trip' id='trip' type='radio' />
                                        ONE WAY
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input name='trip' id='trip' type='radio' />
                                        ROUND TRIP
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input name='trip' id='trip' type='radio' />
                                        MULTICITY
                                    </label>
                                </li>
                            </ul>
                            <div className='flex flex-row'>
                                <div>
                                    <input type='text' placeholder='From' />
                                </div>
                                <span>
                                    <img src={SwapNewIcon} />
                                </span>
                                <div>
                                    <input type='text' placeholder='To' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div>
                                <div>DEPARTURE DATE</div>
                                <input type='date' />
                            </div>
                            <div>
                                <div>RETURN DATE</div>
                                <input type='date' />
                            </div>
                            <div>
                                <div>TRAVELLER</div>
                                <div>
                                    <span>1</span>
                                    <span>Travellers</span>
                                    <span></span>
                                </div>
                            </div>
                            <div>
                                <div>CLASS</div>
                                <div>
                                    <span>Economy</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightList