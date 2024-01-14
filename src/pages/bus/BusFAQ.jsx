
import React from 'react'
import Accordion from '../../components/accordian/Accordian';

const faq = [
    {
        title: "Why should I book bus tickets with EaseMyTrip.com?",
        content: "EaseMyTrip is one of the best platforms to book bus tickets that come up with latest technological updates keeping its users in mind. Wide options for buses are available with great offers and discounts. Book Now"
    },
    {
        title: "What are the payment methods for booking bus tickets?",
        content: "With EaseMyTrip bus booking, you have the ease of choosing different methods for payments. Payment options like Debit/Credit Card, Net Banking, Wallets, PhonePe and EMI with various banks are available for the convenience of the customers."
    },
    {
        title: "How to avail discount on bus booking with EaseMyTrip?",
        content: "There are several offers and discounts are available on our website. On this link only, you can find out the ongoing deals on bus tickets ."
    },
    {
        title: "What to do if I lose my ticket?",
        content: "The online booking facility allows you having a copy of your bus ticket in your inbox. You can obtain this again from your email I’d."
    },
    {
        title: "How can I cancel my bus ticket at EaseMyTrip?",
        content: "You can cancel your ticket by going to my account segment and then clicking on bus option. The amount of refund will be credited to the original payment method."
    }
]

const BusFAQ = () => {
  return (
    <div className='mx-[155px]'>
        <h2 className='text-[28px] font-semibold text-center'>FAQ's</h2>
        <div className='divide-y divide-gray-300 text-[19px] py-[7px] font-medium'>
            {faq.map((item)=>{
                return (<Accordion title={item.title} content={item.content} />);
            })}
        </div>
    </div>
  )
}

export default BusFAQ