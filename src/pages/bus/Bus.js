import React, { useState } from "react";
import BusTravelDetails from "./BusTravelDetails";
import BusSeatSelector from "./bus-seat-selector";
import BusBenefit from "./BusBenefit";
import EMTFIRST from "../../images/offerFlight/EMTFIRST.webp";
import EMTWINGS from "../../images/offerFlight/emtwings-new-hp.webp";
import VISTARA1 from "../../images/offerFlight/vistara-29nov23-hp.webp";
import AIRINDIA from "../../images/offerFlight/air-india-express.webp";
import AKASA from "../../images/offerFlight/akasa.webp";
import BUSINESSCLASS from "../../images/offerFlight/busines-class.webp";
import "./bus.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LeftArrow from "../../images/hotelComponent/left-arrow.svg";
import RightArrow from "../../images/hotelComponent/right-arrow.svg";

import BusFAQ from "./BusFAQ";
import BusSearchBar from "./searchbar";
import OfferCard from "../../components/offerCard/OfferCard";

const crousalItems = [
  {
    id: 1,
    render: (
      <OfferCard
        className={"offer1-bg"}
        tagline={"New User Offer"}
        dealName={"First Flight"}
        code={"EMTFIRST"}
        offerBg={"#0961e7"}
        image={EMTFIRST}
        para={"Register and Get Discount on Booking First Flight with us"}
        validity={"Valid till 30th Dec 2023"}
      />
    ),
  },
  {
    id: 2,
    render: (
      <OfferCard
        className={"offer2-bg"}
        tagline={"International"}
        dealName={"Airlines Deal"}
        code={"EMTWINGS"}
        offerBg="#4e7a50"
        image={EMTWINGS}
        para={
          "Make International Flight Bookings & Enjoy up to Rs. 10,000 OFF*"
        }
        validity={"Valid till: 31st Dec 2023"}
      />
    ),
  },
  {
    id: 3,
    render: (
      <OfferCard
        className={"offer3-bg"}
        tagline={"Enjoy up to 15% OFF"}
        dealName={"Vistara Airlines"}
        code={"VSTFIRST"}
        offerBg="#d63bf5"
        image={VISTARA1}
        para={"Book Your Domestic Flights with Vistara & Enjoy up to 15% OFF*"}
        validity={"Valid till 30th Jan 2024"}
      />
    ),
  },
  {
    id: 4,
    render: (
      <OfferCard
        className={"offer4-bg"}
        tagline={"Fly with"}
        dealName={"Air India Express"}
        code={"AIRCODE1"}
        offerBg={"#D4453F"}
        image={AIRINDIA}
        para={
          "Enjoy up to 30% OFF on Booking Domestic Flights with Air India Express"
        }
        validity={"Valid till 23rd Dec 2023"}
      />
    ),
  },
  {
    id: 5,
    render: (
      <OfferCard
        className={"offer5-bg"}
        tagline={"New User Offer"}
        dealName={"First Flight"}
        code={"EMTFIRST"}
        offerBg="#d63bf5"
        image={AKASA}
        para={"Register and Get Discount on Booking First Flight with us"}
        validity={"Valid till 30th Dec 2023"}
      />
    ),
  },
  {
    id: 6,
    render: (
      <OfferCard
        className={"offer6-bg"}
        tagline={"New User Offer"}
        dealName={"First Flight"}
        code={"EMTFIRST"}
        offerBg="#d63bf5"
        image={BUSINESSCLASS}
        para={"Register and Get Discount on Booking First Flight with us"}
        validity={"Valid till 30th Dec 2023"}
      />
    ),
  },
];
const Crousal = ({ items = [] }) => {

  const [slide, setSlide]=useState(null)
  const next = ()=>{
    if(slide){
      if(slide.index <= 2){
        slide.go(slide.index + 1)
      }else{
        slide.go(0)
      }
      console.log(slide.index, slide.length);
    }

  }
  const prev = ()=>{
    if(slide){
      if(slide.index === 0){
        slide.go(slide.length - 1)
      }else{
        slide.go(slide.index - 1)
      }
    }

  }
  return (
   <div className="relative">
     <Splide
     onMounted={(s)=>setSlide(s)}
      options={{
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        gap: 20,
        arrows:false,
        pagination:false,
        rewind:true
        
      }}
      aria-label="My Favorite Images"
    >
      {items.map((item) => (
        <SplideSlide key={item.id}>{item.render}</SplideSlide>
      ))}
    </Splide>
    <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-white to-transparent w-[200px] flex items-center justify-center" onClick={prev}>
      <img src={LeftArrow} className="cursor-pointer"/>
      </div>
    <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white to-transparent w-[200px]  flex items-center justify-center" onClick={next}>
    <img src={RightArrow} className="cursor-pointer"/>
    </div>
   </div>
  );
};

const Bus = () => {
  const [openSeatSelector, setOpenSeatSelector] = useState(false);

  return (
    <div>
      <BusSearchBar/>
      <button onClick={() => setOpenSeatSelector(true)}>Select seats</button>
      <BusSeatSelector
        open={openSeatSelector}
        setOpen={setOpenSeatSelector}
        busDetail={{
          seats: 35,
        }}
      />
      <div className="my-10">
        <h2 className="text-center text-[34px] font-bold">Exclusive Offers</h2>
        <div className="text-center text-[15px] font-medium flex flex-row justify-center gap-14 mb-10 mt-5">
          <span>Best Offers</span>
          <span>Flight</span>
          <span>Hotel</span>
          <span>Bus</span>
          <span>Holidays</span>
        </div>
        <div>
          <Crousal items={crousalItems} />
        </div>
        <button className="bg-[#2196F3] rounded-full px-5 py-[5px] block m-auto text-white text-[15px] font-medium my-[15px]">
          View All Offers
        </button>
      </div>
      <BusTravelDetails />
      <BusFAQ />
      <BusBenefit />
    </div>
  );
};

export default Bus;
