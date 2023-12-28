import React, { useEffect, useRef } from 'react'
import SwapNewIcon from '../images/flightCardImage/swap-nw-icn.png'
import '../styles/flight.css'
import FilterCheckBox from '../components/FilterCheckBox'
import FlightRoute from '../components/flightRouteCard/FlightRoute'
import Stopage from '../components/Stopage'
import FlightListOfferCode from '../components/FlightListOfferCode'

const FlightList = () => {
    const scrollerRef = useRef(null)

    const prevScroll = () => {
        scrollerRef.current?.scrollBy(-306, 0)
        if (scrollerRef.current.scrollLeft == 0) {
            scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth;
        }

    }

    const nextScroll = () => {
        scrollerRef.current?.scrollBy(306, 0)
        if (scrollerRef.current.scrollLeft + scrollerRef.current.clientWidth >= scrollerRef.current.scrollWidth) {
            scrollerRef.current.scrollLeft = 0;
        }
    }

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
                            <button className='search-button'>Search</button>
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-row'>
                            <li>
                                <label>
                                    <input type='checkbox' />
                                    Defence Forces
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='checkbox' />
                                    Students
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='checkbox' />
                                    Senior Citizens
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='checkbox' />
                                    Doctors Nurses
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row max-w-full'>
                    <div className='flex flex-col border-2 border-gray-400 w-60 px-4'>
                        <div><h2>FILTER</h2></div>
                        <div>
                            <h3>Popular Filters</h3>
                            <div>
                                <FilterCheckBox name={"Nonstop"} />
                                <FilterCheckBox name={"Morning Departure"} />
                                <FilterCheckBox name={"Vistara"} />
                                <FilterCheckBox name={"Air India"} />
                                <FilterCheckBox name={"AksaraAir"} />
                                <FilterCheckBox name={"Indigo"} />
                                <FilterCheckBox name={"Air India Express"} />
                                <FilterCheckBox name={"Air India Express"} />
                                <FilterCheckBox name={"SpiceJet"} />
                            </div>
                        </div>
                        <div>
                            <h3>Price Range</h3>
                            <input type="range" className='w-52' />
                            <p>Rs. 22911 - Rs.57751</p>
                        </div>
                        <div>
                            <h3>Stops</h3>
                            <div className='flex flex-row gap-[6px]'>
                                <Stopage stopsNumber={"0"} stops={"Nonstop"} />
                                <Stopage stopsNumber={"1"} stops={"Stop"} />
                                <Stopage stopsNumber={"2+"} stops={"Stop"} />
                            </div>
                        </div>
                        <div>
                            <h3>Aircraft</h3>
                            <FilterCheckBox name={"Airbus A320"} />
                            <FilterCheckBox name={"Airbus A2IN"} />
                            <FilterCheckBox name={"Boeing B78P"} />
                            <FilterCheckBox name={"Boeing B738"} />
                            <FilterCheckBox name={"Airbus A20N"} />
                            <FilterCheckBox name={"Airbus A321"} />
                        </div>
                    </div>
                    <div className='flex flex-col w-[955px] relative h-fit p-4'>
                        <button onClick={() => prevScroll()} className='ml-[5px] absolute text-black z-10 left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center  justify-center w-5 h-5 bg-white text-lg'>{'<'}</button>
                        <button onClick={() => nextScroll()} className='mr-[5px] absolute text-black z-10 right-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center  justify-center w-5 h-5 bg-white text-lg'>{'>'}</button>
                        <div ref={scrollerRef} className='scroll-smooth snap-mandatory snap-x flex flex-row overflow-x-auto scroller gap-x-2'>
                            <FlightListOfferCode code={"BOBEMI"} tagline={" | Get up to Rs.7500 OFF for payments made via BOB Credit Cards EMI."} />
                            <FlightListOfferCode code={"IDBIEMT"} tagline={" | Get up to Rs.7500 OFF for payments made only via IDBI Bank Debit Card and Credit Card."} />
                            <FlightListOfferCode code={"EMTDCIND"} tagline={" | Get up to Rs.5000 OFF for payments made only via Indian Bank Mastercard Debit Cards only."} />
                            <FlightListOfferCode code={"EMTMBK"} tagline={" | Get up to Rs.500 OFF for payments via MobiKwik."} />
                            <FlightListOfferCode code={"DELIGHT"} tagline={" | Win a Flight, Hotel stay and Holiday and Get assured voucher worth INR 5000"} />
                            <FlightListOfferCode code={"ICICIAMZ"} tagline={" | Get up to Rs.5000 OFF for payments via ICICI Amazon Co-Branded Credit Card."} />
                        </div>
                        <div className=''>
                            <FlightRoute />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightList