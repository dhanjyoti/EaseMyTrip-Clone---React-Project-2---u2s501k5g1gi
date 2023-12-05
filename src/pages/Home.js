import React from 'react';
import '../styles/home.css'
import Trip from '../components/home/Trip';
import OfferCard from '../components/offerCard/OfferCard';
import refundImage from '../images/refundImage.png';
import TandC_refund from '../images/T&C_refund.png';
import EMTFIRST from '../images/offerFlight/EMTFIRST.webp';
import EMTWINGS from '../images/offerFlight/emtwings-new-hp.webp';
import VISTARA1 from '../images/offerFlight/vistara-29nov23-hp.webp';
import AIRINDIA from '../images/offerFlight/air-india-express.webp';
import AKASA from '../images/offerFlight/akasa.webp';
import BUSINESSCLASS from '../images/offerFlight/busines-class.webp';
import CovidRefund from '../images/covid-refund.png';
import RitArrow from '../images/ritArrow'
import TopFlightRoutes from '../components/TopFlightRoutes';
import mumbaiImg from '../images/flightCardImage/mumbai-img.png';
import ahmedabadImg from '../images/flightCardImage/ahmedabad-img.png';
import lucknowImg from '../images/flightCardImage/lucknow-img.png';
import chennaiImg from '../images/flightCardImage/chennai-img.png';
import dubaiImg from '../images/flightCardImage/dubai-img.png';
import kolkataImg from '../images/flightCardImage/kolkata-img.png';
import bangaloreImg from '../images/flightCardImage/bangalore-img.png';
import jaipurImg from '../images/flightCardImage/jaipur-img.png';
import delhiImg from '../images/flightCardImage/delhi-img.png';
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
import { Splide, SplideSlide } from '@splidejs/react-splide';
import WebCheckinIcon from '../images/WebCheckinIcon';
const crousalItems = [
  {
    id: 1,
    render: <OfferCard
      className={"offer1-bg"}
      tagline={"New User Offer"}
      dealName={"First Flight"}
      code={"EMTFIRST"}
      image={EMTFIRST}
      para={"Register and Get Discount on Booking First Flight with us"}
      validity={"Valid till 30th Dec 2023"}
    />
  },
  {
    id: 2,
    render: <OfferCard
      className={"offer2-bg"}
      tagline={"International"}
      dealName={"Airlines Deal"}
      code={"EMTWINGS"}
      image={EMTWINGS}
      para={"Make International Flight Bookings & Enjoy up to Rs. 10,000 OFF*"}
      validity={"Valid till: 31st Dec 2023"}
    />
  },
  {
    id: 3,
    render: <OfferCard
      className={"offer3-bg"}
      tagline={"Enjoy up to 15% OFF"}
      dealName={"Vistara Airlines"}
      code={"VSTFIRST"}
      image={VISTARA1}
      para={"Book Your Domestic Flights with Vistara & Enjoy up to 15% OFF*"}
      validity={"Valid till 30th Jan 2024"}
    />
  },
  {
    id: 4,
    render: <OfferCard
      className={"offer4-bg"}
      tagline={"Fly with"}
      dealName={"Air India Express"}
      code={"AIRCODE1"}
      image={AIRINDIA}
      para={"Enjoy up to 30% OFF on Booking Domestic Flights with Air India Express"}
      validity={"Valid till 23rd Dec 2023"}
    />
  },
  {
    id: 5,
    render: <OfferCard
      className={"offer5-bg"}
      tagline={"New User Offer"}
      dealName={"First Flight"}
      code={"EMTFIRST"}
      image={AKASA}
      para={"Register and Get Discount on Booking First Flight with us"}
      validity={"Valid till 30th Dec 2023"}
    />
  },
  {
    id: 6,
    render: <OfferCard
      className={"offer6-bg"}
      tagline={"New User Offer"}
      dealName={"First Flight"}
      code={"EMTFIRST"}
      image={BUSINESSCLASS}
      para={"Register and Get Discount on Booking First Flight with us"}
      validity={"Valid till 30th Dec 2023"}
    />
  }
]
const Crousal = ({ items = [] }) => {
  return (
    <Splide options={{
      perPage: 3,
      perMove: 1,
      autoWidth: true, gap: 20
    }}
      aria-label="My Favorite Images">
      {items.map((item) => <SplideSlide key={item.id}>
        {item.render}
      </SplideSlide>)}

    </Splide>
  )
}
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

        <div className='flex flex-row items-center justify-between'>
          <div>
            <ul className='flex flex-row'>
              <li>
                <label>
                  <input type='checkbox' />
                  Defence Forces
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                  Students
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                  Senior Citizens
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                  Doctors Nurses
                </label>
              </li>
            </ul>
          </div>
          <div className='web-checkin flex flex-row'>
            <div>
              <WebCheckinIcon />
            </div>
            <div>Web Check-In</div>
          </div>
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
          <Crousal items={crousalItems} />

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
          <FamousLocation image={<img className='h-[100px] w-[100px]' src={Andaman} />} place={"Andaman"} />
          <FamousLocation image={<Kashmir />} place={"Kashmir"} />
          <FamousLocation image={<Jaipur />} place={"Jaipur"} />
          <FamousLocation image={<Bangalore />} place={"Bengaluru"} />
          <FamousLocation image={<Paris />} place={"Paris"} />
          <FamousLocation image={<Leh />} place={"Leh"} />
          <FamousLocation image={<BaliIndonesia />} place={"Bali"} />
          <FamousLocation image={<Dubai />} place={"Dubai"} />
          <FamousLocation image={<London />} place={"London"} />
          <FamousLocation image={<Kerala />} place={"Kerala"} />
        </div>
      </div>

      <div>
        <div>
          Why book with us?
        </div>
        <div></div>
        <div></div>
      </div>

      <div className='travel-package'>
        <h1 className='travel-package-heading'>Search Flights, Hotels, Bus and Holiday Packages</h1>
        <div className='travel-package-para'>
          EaseMyTrip is one of the largest online travel platforms in India, and a trusted name in the Indian travel industry. We offer "end to end" travel solutions including air tickets, hotel booking, cab and bus booking, train tickets and holiday packages. Additionally, we offer ancillary value-added services.
        </div>
        <div className='travel-package-para'>
          We understand that planning a trip can be overwhelming, so we have simplified the process to make it easy for you to find the perfect travel deals that suit your needs. Our website is user-friendly and provides a wide range of options to choose from. Whether you're planning a family vacation, a solo adventure, or a business trip, we have you covered with our comprehensive travel packages. From flights to hotels, car rentals to holiday packages, we offer everything you need to make your trip a success.
        </div>
        <div className='travel-package-para'>
          We believe in transparency and honesty in all our dealings. We do not charge any hidden fees, and our prices are always competitive. With EaseMyTrip, you can be assured of getting the best travel deals in the market. If you're looking for a hassle-free and affordable way to plan your next trip, look no further than EaseMyTrip. We promise to make your travel experience a memorable one.
        </div>
      </div>
    </div>
  )
}

export default Home