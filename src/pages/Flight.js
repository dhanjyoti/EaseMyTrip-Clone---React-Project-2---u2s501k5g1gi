import React from 'react'
import FlightRouteCard from '../components/flightRouteCard/FlightRouteCard'
// import '../styles/flight.css'

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
                <FlightRouteCard place={"Mumbai"} date={"Monday 18 Dec 2023"} flightName={"Indigo"} price={4972} />
                <FlightRouteCard place={"Bangalore"} date={"Wednesday 06 Dec 2023"} flightName={"Indigo"} price={6053} />
                <FlightRouteCard place={"GOA"} date={"Tuesday 12 Dec 2023"} flightName={"Indigo"} price={4699} />
                <FlightRouteCard place={"Chennai"} date={"Tuesday 05 Dec 2023"} flightName={"Indigo"} price={5272} />
                <FlightRouteCard place={"Pune"} date={"Thursday 07 Dec 2023"} flightName={"Indigo"} price={4998} />
                <FlightRouteCard place={"Ahmedabad"} date={"Thursday 07 Dec 2023"} flightName={"Indigo"} price={3833} />
            </div>

            <div>
                <h2>Book your flight ticket with EaseMyTrip for a memorable experience.</h2>
                <p>
                    EaseMyTrip.com is a reliable travel agent in India, which offers great deals on air tickets. Book flights for all destinations across India or the world at the lowest airfares with us. As one of the leading travel portals of India, we constantly endeavour to make your vacation memorable. So, why go anywhere else? Call us to save big on all kinds of travel products and services and have a memorable travel experience on small budget. We believe in creating awesome vacations for our clients through customized holiday packages & tours. Enjoy great savings on flights, hotels and holiday
                    trips with EaseMyTrip.com.
                    <br />
                    <br />
                    Cheap flights are available at EaseMyTrip.com, one of the leading travel portals in India. The company offers great discounts on domestic and international flight tickets. Being a reliable name in the traveling industry of India, we focus on providing a smooth providing booking experience to our customers. So, book air tickets at the lowest airfare by planning your trip with us. You can also get all relevant information like how to get the boarding passes, the difference between airline tickets and boarding pass tickets, flight status, arrival and departure times of the flights, web check-in and various information one needs to have before traveling.
                </p>
                <p>
                    If you want to book your plane tickets at no convenience fee and looking for transparency in air ticket pricing, we are here to serve you with the best possible offers. To reduce your flight booking cost, we have tied up with several banking partners. You can avail the best flight ticket booking deals for all major low-cost carriers of India and abroad with us. Last minute discounts on air ticket booking are also available with us. So, go for a journey to  your preferred destinations with the best airfare discounts.
                </p>
            </div>


        </div>
    )
}

export default Flight