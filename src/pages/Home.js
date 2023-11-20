import React from 'react';
import Trip from '../components/home/Trip';
import OfferCard from '../components/offerCard/OfferCard';
import refundImage from '../images/refundImage.png';
import TandC_refund from '../images/T&C_refund.png';
import EMTFIRST from '../images/offerFlight/EMTFIRST.webp';
import CovidRefund from '../images/covid-refund.png';
import ritArrow from '../images/ritArrow'
import TopFlightRoutes from '../components/TopFlightRoutes';
import mumbaiImg from '../images/mumbai-img.png'


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
            className={"offer-bg"}
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
      <div className='flex flex-row gap-5'>
        <div className='rounded-xl flex flex-row w-[74%] full-refund'>
          <div><img src={refundImage} /></div>
          <div>
            <div>
              <span>Full Refund<sup>*</sup></span>
              <span>Due to Medical Reasons</span>
            </div>
            <div>
              <ul>
                <li>Presenting you an extraordinary offer in these unfavorable circumstances..</li>
                <li>Get a full refund on a domestic ticket in case you cancel it due to medical sickness..</li>
                <li>The Best Part - There are ZERO extra charges for this service.</li>
              </ul>
            </div>
          </div>
          <div><img src={TandC_refund} /></div>
        </div>
        <div className='rounded-xl w-[24%] covid-refund'>
          <div>
            <p>claim for</p>
            <p>COVID REFUND</p>
            <p>here <span>{<ritArrow/>}</span></p>
          </div>
          <div><img src={CovidRefund} /></div>
        </div>
      </div>

      <h1>Top Flight Routes</h1>

      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
      </div>
    </div>
  )
}

export default Home