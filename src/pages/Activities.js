import React from 'react'
import ActivitiesDestinationCard from '../components/ActivitiesDestinationCard'
import Delhi from '../images/activities/delhi-activity.png'
import Mumbai from '../images/activities/mumbai-activity.png'
import Jaipur from '../images/activities/jaipur-act.png'
import Goa from '../images/activities/goa-activity.png'
import Dubai from '../images/activities/dubai-activity.png'
import Bangkok from '../images/activities/bangkok-activity.png'
import Phuket from '../images/activities/phuket-activity.png'
import Singapore from '../images/activities/singapore-activity.png'
import ActivitiesBottomCard from '../components/ActivitiesBottomCard'
import TopPlaces from '../images/activities/Top_Place.png'
import SpecializedAgent from '../images/activities/SpecilizedAgent.png'
import BestPrice from '../images/activities/BestPrice.png'
import ExclusiveDeal from '../images/activities/exclusive_deals.png'

const Activities = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <h1 className='text-center text-5xl font-semibold py-5'>NEVER STOP EXPLORING</h1>
                <p className='text-center text-xl font-medium'>Explore and enjoy activities pan-India and across the world with us.</p>
            </div>

            <div>
                <div>
                    <h2 className='text-center text-3xl font-medium py-10'>Popular Destinations In India</h2>
                    <div className='flex flex-row gap-2'>
                        <ActivitiesDestinationCard place={Delhi} placeName={"Delhi"} />
                        <ActivitiesDestinationCard place={Mumbai} placeName={"Mumbai"} />
                        <ActivitiesDestinationCard place={Phuket} placeName={"Phuket"} />
                        <ActivitiesDestinationCard place={Goa} placeName={"Goa"} />
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-3xl font-medium py-10'>Most Popular Cities Across The World</h2>
                    <div className='flex flex-row gap-2'>
                        <ActivitiesDestinationCard place={Dubai} placeName={"Dubai"} />
                        <ActivitiesDestinationCard place={Bangkok} placeName={"Bangkok"} />
                        <ActivitiesDestinationCard place={Jaipur} placeName={"Jaipur"} />
                        <ActivitiesDestinationCard place={Singapore} placeName={"Singapore"} />
                    </div>
                </div>
            </div>
            <div className='mx-20'>
                <h1 className='text-center text-3xl font-medium py-10'>Why Choose Activities</h1>
                <div></div>
                <p>
                    Welcome to EaseMyTrip, the one-stop-shop for all your travel needs. In addition to booking flights and hotels, we offer a wide range of activities that will make your trip even more exciting and memorable. Whether you are taking a tour to local areas or in a foreign country, EaseMyTrip offers you activities to do. You can book any of the mentioned activities online through our portal.
                    <br />
                    <br />
                    Here are some of the various activities you can book through our website:
                    <br />
                    <br />
                    <span className='font-semibold'>Activity Ideas</span>: If you're not sure what to do during your trip, check out our Activity Ideas section. We have curated a list of popular activities in each destination, such as sightseeing tours, museum visits, and food tours, to help you plan your itinerary.
                    <br />
                    <br />
                    <span className='font-semibold'>Fun Activities</span>: Looking for something to do with your family or friends? Our Fun Activities section offers a range of options, including amusement park visits, water sports, and beach activities. These activities are perfect for a day of fun and relaxation.
                    <br />
                    <br />
                    <span className='font-semibold'>Adventure Activities</span>: If you're an adrenaline junkie, be sure to check out our Adventure Activities section. We have a variety of options, including bungee jumping, paragliding, and zip-lining. These activities are perfect for those who want to experience a rush of excitement during their trip.
                    <br />
                    <br />
                    <span className='font-semibold'>Family Activities</span>: Travelling with kids? No problem! Our Family Activities section has plenty of options for family-friendly activities, including theme park visits, aquarium trips, and wildlife safaris. These activities are perfect for creating lasting memories with your loved ones.
                    <br />
                    <br />
                    <span className='font-semibold'>Thrilling Activities</span>: If you're looking for adventure and excitement, our Thrilling Activities section is the perfect place to find it. We offer a wide range of options, including skydiving, scuba diving, and rock climbing. These activities are perfect for those who are seeking a heart-pumping experience.
                    <br />
                    <br />
                    <span className='font-semibold'>Couple Activities</span>: Whether you're on your honeymoon or a romantic getaway, our Couple Activities section offers a variety of romantic activities to do with your partner. From sunset cruises to hot air balloon rides, we have lots of options to help you create unforgettable memories.
                    <br />
                    <br />
                    <span className='font-semibold'>Group Activities</span>: If you're travelling with a group, our Group Activities section has plenty of options to keep everyone entertained. We offer a variety of activities, including wine tours, pub crawls, and team-building exercises. These activities are perfect for bonding with your travel companions and creating lifelong memories.
                    <br />
                    <br />
                    In conclusion, at EaseMyTrip, we offer a wide variety of activities to make your trip even more memorable. Whether you're looking for fun, adventure, or relaxation, we have something for everyone. Book your activities today and get ready to have the time of your life!
                    <br />
                    <br />
                </p>
            </div>
            <div className='flex flex-row gap-28 py-10'>
                <ActivitiesBottomCard icon={TopPlaces} activityName={"Top Places"}/>
                <ActivitiesBottomCard icon={SpecializedAgent} activityName={"Specialized Agent"}/>
                <ActivitiesBottomCard icon={BestPrice} activityName={"Best Price"}/>
                <ActivitiesBottomCard icon={ExclusiveDeal} activityName={"Exclusive Deals"}/>
            </div>
        </div>
    )
}

export default Activities