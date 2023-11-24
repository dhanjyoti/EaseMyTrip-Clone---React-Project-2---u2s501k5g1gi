import React from 'react'
import FlightCard from '../components/flightCard.js/FlightCard'

const Flight = () => {
    return (
        <div>
            <di className='m-auto'><h1>Best Deals on Flight Tickets</h1></di>
            <div className='flex flex-row justify-between'>
                <div>
                    <p>Departing from</p>
                    <div className='border-[1px] border-b-gray-500'>
                        <select>
                            <option value>Select</option>
                            <option value="DEL-Delhi, India">Delhi (DEL)</option>
                            <option value="BOM-Mumbai, India">Mumbai (BOM)</option>
                            <option value="BLR-Bengaluru, India">Bengaluru (BLR)</option>
                            <option value="HYD-Hyderabad, India">Hyderabad (HYD)</option>
                            <option value="CCU-Kolkata, India">Kolkata (CCU)</option>
                            <option value="MAA-Chennai, India">Chennai (MAA)</option>
                            <option value="GOI-Goa, India">GOA (GOI)</option>
                            <option value="PNQ-Pune, India">Pune (PNQ)</option>
                            <option value="AMD-Ahmedabad, India">Ahmedabad (AMD)</option>
                            <option value="GAU-Guwahati, India">Guwahati (GAU)</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div>Travel Period</div>
                    <div className='border-[1px] border-black rounded-md'>
                        <button className='w-16 h-6'>Dec</button>
                        <button className='w-16 h-6 border-x-[1px] border-black'>Jan</button>
                        <button className='w-16 h-6'>Feb</button>
                    </div>
                </div>
            </div>
            <div>
                <FlightCard place={"Mumbai"} date={"Monday 18 Dec 2023"} flightName={"Indigo"} price={4972} />
                <FlightCard place={"Bangalore"} date={"Wednesday 06 Dec 2023"} flightName={"Indigo"} price={6053} />
                <FlightCard place={"GOA"} date={"Tuesday 12 Dec 2023"} flightName={"Indigo"} price={4699} />
                <FlightCard place={"Chennai"} date={"Tuesday 05 Dec 2023"} flightName={"Indigo"} price={5272} />
                <FlightCard place={"Pune"} date={"Thursday 07 Dec 2023"} flightName={"Indigo"} price={4998} />
                <FlightCard place={"Ahmedabad"} date={"Thursday 07 Dec 2023"} flightName={"Indigo"} price={3833} />
            </div>
        </div>
    )
}

export default Flight