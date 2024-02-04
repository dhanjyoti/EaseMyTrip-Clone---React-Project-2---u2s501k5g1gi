import Accordion from "../../components/accordian/Accordian";
import React from "react";


const FAQs = () => {
  return (
    <div className="mx-[145px]">
      <Accordion
        title={"How do you find the cheapest airfare?"}
        content={
        "To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In comparison to full- service carriers, low- cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets."
        }
      />
      <Accordion
        title={"What is the best day of the week to buy plane tickets?"}
        content={
          "As per previous findings, the best day to book the cheapest flight tickets was Tuesday, but it’s not anymore. As more business travelers have started booking their flights during the week, the best day to buy those tickets is now Sunday. To avail more savings on flight tickets, try to book on a Sunday that is more than 21 days ahead of your trip."
        }
      />
      <Accordion
        title={"Is it cheaper to book flights at the last minute?"}
        content={
          "There is a popular belief that if you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief, booking airline tickets late is often cheaper. As per the research, flight tickets are generally cheaper if booked three weeks before departure than tickets booked 6 months ahead. But, this is not necessary. The price of flights fluctuates daily or even hourly in various cases. Many times, it changes due to the increasing demand for a particular route by passengers. So, sometimes flights get cheaper while traveling closer to the travel date and in some cases, it gets expensive."
        }
      />
      <Accordion 
        title={"How can I fly for free?"}
        content={
          "At present, EaseMyTrip has the offer to avail for free flight tickets worth Rs.5000 daily. However, there are many other options like loyalty points, frequent flyer credit cards from different banks and availing free flights with miles that may help you in flying for free."
        }
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
  );
};

export default FAQs;
