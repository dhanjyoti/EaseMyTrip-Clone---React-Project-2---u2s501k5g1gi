import React from 'react'
import Accordion from '../../components/accordian/Accordian'

const FAQs = () => {
  return (
    <div className='mx-[155px]'>
        <h2>FAQs</h2>
        <div className=''>
            <Accordion
                title={"How can I Book Train Tickets Online?"}
                content={'To book train tickets online, log on to the EaseMyTrip website and click on the train tab. Search trains for your preferred route and date and then check availability. If your tickets are available, you can proceed to the next step. If there is waiting list, you can still go to book your train tickets. Once you click on the continue option, you will be asked to verify your Railway id to continue booking online train tickets. Now, you can enter the passenger details and proceed to book. You will be prompted about your Railway password. Now you will be directed to the "Payment Option" section where choose the method for payment. After entering the details, you have to fill in your Railway password and then your transaction of online train booking will be processed and you will receive a booking confirmation.'}
            />
            <Accordion
                title={"What is Premium Tatkal?"}
                content={"Premium Tatkal is a new quota introduced by railway to book online train tickets. Under this quota, dynamic fares are applicable. Premium Tatkal fare increases following the number of bookings. Booking Premium Tatkal (PT) ticket is much costlier than Tatkal because of the dynamic fare pricing. In this case, train ticket prices depend on the booking rates and availability of seats."}
            />
            <Accordion
                title={"How can I Cancel Tatkal Tickets?"}
                content={"On cancellation of confirmed Tatkal tickets, no refund is given. On the cancellation of contingent and waitlisted Tatkal tickets, amount will be charged as per the existing rules of Railway. However, you can partially cancel the Tatkal e-tickets."}
            />
            <Accordion
                title={"What are the Cancellation Charges for Train Tickets?"}
                content={"To get refunds on cancellation of train tickets, passengers should cancel their tickets before chart preparation. If a confirmed train ticket is cancelled more than 48 hrs prior to the scheduled departure of the train, cancellation charges will be Rs.240/- for AC First Class/Executive Class, Rs.200/- for AC 2 Tier/First Class, Rs. 180 for AC 3 Tier/AC Chair car/ AC 3 Economy, Rs.120/- for Sleeper Class and Rs.60/- for Second Class. These cancellation charges are applicable per ticket per passenger and same will be deducted before processing the refunds. If a confirmed ticket is cancelled between 48 and 12 hours prior to the scheduled departure of the train, cancellation charges will be 25% of the fare (subject to the above mentioned minimum flat rate). Between 12 hours and 4 hours prior to the scheduled departure of the train up to chart preparation (whichever is earlier), 50% of the fare paid subject to the minimum cancellation charges."}
            />
            <Accordion
                title={"How Many Days in Advance you can Book Train Tickets?"}
                content={"Advance Reservation Period for booking train tickets is 120 days (excluding the date of journey). So, booking in trains from train originating stations will open and remain available for 120 days."}
            />
            <Accordion
                title={"When the Chart of a Train is Prepared?"}
                content={"The first chart of a train is typically prepared 4 hours ahead of its departure from originating station or remote location station. Chart of early morning trains is prepared the night before. However, if some seats still remain available, they can be booked by the passengers. So, the final chart is created 30 minutes before departure of train."}
            />
            <Accordion
                title={"Can I Change My Train Booking?"}
                content={"You can’t change your train booking. All that you can do is to cancel your current ticket and book again."}
            />
            <Accordion
                title={"How to Order Food in Train?"}
                content={"There are several websites and apps that offer food delivery services in train. You can order food in trains using your mobile phone and food will be delivered at your berth. With little efforts, modern day travelers can enjoy the best meals during their train journeys. Food is delivered from reputed restaurants in the locality and multiple payment options are available for the same."}
            />
            <Accordion
                title={"What is the Concession for Senior Citizens Quota?"}
                content={"Railway gives the facility to senior citizens for booking train tickets under senior citizen quota by availing a concession. As per the rules, male senior citizens of 60 years and above and lady senior citizens of 58 years and above can avail the concession in the fares of all classes of Mail/Express/Rajdhani/Shatabdi/Jan-Shatabdi/Duronto group of trains. The concession amount for men is 40% and for women is 50%."}
            />
            <Accordion
                title={"What is Ladies Quota in Trains?"}
                content={"This quota is only for lady travelers or accompanying male child below 12 years. Ladies quota is available in sleeper class and second sitting class."}
            />
        </div>
    </div>
  )
}

export default FAQs