import React from 'react'
import Trip from '../components/home/Trip'
import OfferCard from '../components/offerCard/OfferCard'
import refundImage from '../images/refundImage.png';
import TandC_refund from '../images/T&C_refund.png';
import EMTFIRST from '../images/offerFlight/EMTFIRST.webp'

const Home = () => {
  return (
    <div>
      <div className='border-2 border-[#007aff] bg-[#007aff] py-12 px-4'>
        <div className='flex flex-row justify-between'>
          <div>
            <Trip text={"One Way"} />
            <Trip text={"Round Trip"} />
            <Trip text={"Multicity"} />
          </div>
          <div>Search Lowest Price</div>
        </div>

        <div>

        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div>
        <h2>Exclusive Offers</h2>
        <div>
          <span>Best Offers</span>
          <span>Flight</span>
          <span>Hotel</span>
          <span>Bus</span>
          <span>Holidays</span>
        </div>
        <div>
          <OfferCard 
            tagline={"New User Offer"} 
            dealName={"First Flight"} 
            code={"EMTFIRST"} 
            image={EMTFIRST} 
            para={"Register and Get Discount on Booking First Flight with us"}
            validity={"Valid till 30th Dec 2023"}
          />
        </div>
        <button className='bg-[#2196F3] rounded-full px-5 py-1 text-white'>View All Offers</button>
      </div>

      {/* Refund Section */}
      <div>
        <div className='border-1 border-blue-600 flex flex-row'>
          <div><img src={refundImage} /></div>
          <div></div>
          <div><img src={TandC_refund} /></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Home