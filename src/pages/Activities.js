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

const Activities = () => {
    return (
        <div>
            <div>
                <h1>NEVER STOP EXPLORING</h1>
                <p>Explore and enjoy activities pan-India and across the world with us.</p>
            </div>

            <div>
                <div>
                    <h2>Popular Destinations In India</h2>
                    <div className='flex flex-row gap-2'>
                        <ActivitiesDestinationCard place={Delhi} placeName={"Delhi"} />
                        <ActivitiesDestinationCard place={Mumbai} placeName={"Mumbai"} />
                        <ActivitiesDestinationCard place={Phuket} placeName={"Phuket"} />
                        <ActivitiesDestinationCard place={Goa} placeName={"Goa"} />
                    </div>
                </div>
                <div>
                    <h2>Most Popular Cities Across The World</h2>
                    <div className='flex flex-row gap-2'>
                        <ActivitiesDestinationCard place={Dubai} placeName={"Dubai"} />
                        <ActivitiesDestinationCard place={Bangkok} placeName={"Bangkok"} />
                        <ActivitiesDestinationCard place={Jaipur} placeName={"Jaipur"} />
                        <ActivitiesDestinationCard place={Singapore} placeName={"Singapore"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Activities