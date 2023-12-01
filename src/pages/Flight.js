import React from 'react'
import FlightRouteCard from '../components/flightRouteCard/FlightRouteCard'
import Accordion from '../components/accordian/Accordian'
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
            <div>
                <div>
                    <h1>FAQ's</h1>
                </div>
                <div>
                    <Accordion
                        title={"How do you find the cheapest airfare?"}
                        content={"To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In comparison to full- service carriers, low- cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets."}
                    />
                    <Accordion
                        title={"What is the best day of the week to buy plane tickets?"}
                        content={"As per previous findings, the best day to book the cheapest flight tickets was Tuesday, but it’s not anymore. As more business travelers have started booking their flights during the week, the best day to buy those tickets is now Sunday. To avail more savings on flight tickets, try to book on a Sunday that is more than 21 days ahead of your trip."}
                    />
                    <Accordion
                        title={"Is it cheaper to book flights at the last minute?"}
                        content={"There is a popular belief that if you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief, booking airline tickets late is often cheaper. As per the research, flight tickets are generally cheaper if booked three weeks before departure than tickets booked 6 months ahead. But, this is not necessary. The price of flights fluctuates daily or even hourly in various cases. Many times, it changes due to the increasing demand for a particular route by passengers. So, sometimes flights get cheaper while traveling closer to the travel date and in some cases, it gets expensive."}
                    />
                    <Accordion
                        title={"How can I fly for free?"}
                        content={"At present, EaseMyTrip has the offer to avail for free flight tickets worth Rs.5000 daily. However, there are many other options like loyalty points, frequent flyer credit cards from different banks and availing free flights with miles that may help you in flying for free."}
                    />
                    <Accordion
                        title={"How to book a flight ticket online?"}
                        content={`Booking flight tickets with EaseMyTrip is extremely hassle-free. Follow the details below for a smooth booking experience. Follow the steps mentioned:
                    Step 1: Open EaseMyTrip and tap on the Flights tab.
                    Step 2: On the top left corner, there are two tabs named One-Way as of One-Way and Round-Trip. Select the tab as per your preference.
                    Step 3: Enter the departure point and destination point. Also, select the departure dates and return dates if looking for a round-trip. Select the number of travelers traveling and the preferred class you wish to fly in.
                    Step 4: Tap on the Search button. You will be redirected to the flights' page, where all the details will be mentioned. All the available flights for your route will be mentioned on the next page.
                    Step 5: Choose the flight that is appropriate and then tap the ‘Book Now’ option.
                    Step 6: Fill in the required and apply your preferred coupon code to save money on your booking.
                    Step 7: Tap the 'Continue Booking' option and fill in the details asked.
                    Step 8: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit card, Credit card, UPI, net banking, or wallet money.
                    Step 9: Once the payment is done, you will receive an Email and SMS for the same. You will also receive your e-ticket on mobile and email ID.
                    
                    Booking flight tickets with EaseMyTrip is easy and hassle-free. Our aim is to make the travel experience easy for our customers. Don’t wait for the last moment, book your flight tickets to get the best deals.`}
                    />
                </div>
            </div>


        </div>
    )
}

export default Flight