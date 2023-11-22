import React from 'react';
import Trip from '../components/home/Trip';
import OfferCard from '../components/offerCard/OfferCard';
import refundImage from '../images/refundImage.png';
import TandC_refund from '../images/T&C_refund.png';
import EMTFIRST from '../images/offerFlight/EMTFIRST.webp';
import CovidRefund from '../images/covid-refund.png';
import RitArrow from '../images/ritArrow'
import TopFlightRoutes from '../components/TopFlightRoutes';
import mumbaiImg from '../images/flightCard/mumbai-img.png';
import ahmedabadImg from '../images/flightCard/ahmedabad-img.png';
import lucknowImg from '../images/flightCard/lucknow-img.png';
import chennaiImg from '../images/flightCard/chennai-img.png';
import dubaiImg from '../images/flightCard/dubai-img.png';
import kolkataImg from '../images/flightCard/kolkata-img.png';
import bangaloreImg from '../images/flightCard/bangalore-img.png';
import jaipurImg from '../images/flightCard/jaipur-img.png';
import delhiImg from '../images/flightCard/delhi-img.png';
import Important from '../images/Important';
import TrvlGuide from '../images/TrvlGuide';
import FamousLocation from '../components/FamousLocation';
import Andaman from '../images/famousTravelAttraction/andaman-new.png';
import Kashmir from '../images/famousTravelAttraction/Kashmir';
import Jaipur from '../images/famousTravelAttraction/Jaipur';
import Bangalore from '../images/famousTravelAttraction/Bangalore';
import Paris from '../images/famousTravelAttraction/Paris';
import Leh from '../images/famousTravelAttraction/Leh';
import BaliIndonesia from '../images/famousTravelAttraction/BaliIndonesia';
import Dubai from '../images/famousTravelAttraction/Dubai';
import London from '../images/famousTravelAttraction/London';
import Kerala from '../images/famousTravelAttraction/Kerala';


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
            <p>here <span>{<RitArrow />}</span></p>
          </div>
          <div><img src={CovidRefund} /></div>
        </div>
      </div>

      <h1>Top Flight Routes</h1>

      <div className='grid grid-cols-3 grid-flow-row gap-4'>
        <TopFlightRoutes image={mumbaiImg} takeOff={"Chennai"} landing={"Mumbai"} routeCode={"MAA-BOM"} />
        <TopFlightRoutes image={ahmedabadImg} takeOff={"Delhi"} landing={"Ahmendabad"} routeCode={"DEL-AMD"} />
        <TopFlightRoutes image={lucknowImg} takeOff={"Delhi"} landing={"Lucknow"} routeCode={"DEL-LKO"} />
        <TopFlightRoutes image={chennaiImg} takeOff={"Mumbai"} landing={"Chennai"} routeCode={"BOM-MAA"} />
        <TopFlightRoutes image={dubaiImg} takeOff={"Mumbai"} landing={"Dubai"} routeCode={"BOM-DXB"} />
        <TopFlightRoutes image={kolkataImg} takeOff={"Mumbai"} landing={"Kolkata"} routeCode={"BOM-CCU"} />
        <TopFlightRoutes image={bangaloreImg} takeOff={"Hyderabad"} landing={"Bangalore"} routeCode={"HYD-BLR"} />
        <TopFlightRoutes image={jaipurImg} takeOff={"Mumbai"} landing={"Jaipur"} routeCode={"BOM-JAI"} />
        <TopFlightRoutes image={delhiImg} takeOff={"Delhi"} landing={"Dubai"} routeCode={"DEL-DXB"} />
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-row border-2 border-blue-500 rounded-ss-full background'>
          <div>
            <Important />
          </div>
          <div>
            <p>Important Info:</p>
            <p>To cancel/claim refund or reschedule/modify your booking.</p>
          </div>
        </div>
        <div className='flex flex-row border-2 border-blue-500 rounded-ss-full background'>
          <div>
            <TrvlGuide />
          </div>
          <div>
            <p>Travel Guide :</p>
            <p>Get latest information on airlines & airports guidelines, state-wise</p>
            <p>quarantine rules, travel checklists, web-checkin etc.</p>
          </div>
        </div>
      </div>

         {/* Famous Travel Attraction */}
      <div className='flex flex-col items-center justify-center mx-20'>
        <h1>Famous Travel Attraction</h1>
        <div className='grid grid-cols-5 grid-flow-row gap-[30px] m-auto mt-8 mb-4'>
          <FamousLocation image={<img className='h-[100px] w-[100px]' src={Andaman}/>} place={"Andaman"} />
          <FamousLocation image={<Kashmir/>} place={"Kashmir"} />
          <FamousLocation image={<Jaipur/>} place={"Jaipur"} />
          <FamousLocation image={<Bangalore/>} place={"Bengaluru"} />
          <FamousLocation image={<Paris/>} place={"Paris"} />
          <FamousLocation image={<Leh/>} place={"Leh"} />
          <FamousLocation image={<BaliIndonesia/>} place={"Bali"} />
          <FamousLocation image={<Dubai/>} place={"Dubai"} />
          <FamousLocation image={<London/>} place={"London"} />
          <FamousLocation image={<Kerala/>} place={"Kerala"} />
        </div>
      </div>
    </div>
  )
}

export default Home