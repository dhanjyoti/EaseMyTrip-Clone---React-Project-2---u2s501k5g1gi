import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import Trip from "../components/home/Trip";
import OfferCard from "../components/offerCard/OfferCard";
import refundImage from "../images/refundImage.png";
import TandC_refund from "../images/T&C_refund.png";
import EMTFIRST from "../images/offerFlight/EMTFIRST.webp";
import EMTWINGS from "../images/offerFlight/emtwings-new-hp.webp";
import VISTARA1 from "../images/offerFlight/vistara-29nov23-hp.webp";
import AIRINDIA from "../images/offerFlight/air-india-express.webp";
import AKASA from "../images/offerFlight/akasa.webp";
import BUSINESSCLASS from "../images/offerFlight/busines-class.webp";
import CovidRefund from "../images/covid-refund.png";
import RitArrow from "../images/ritArrow";
import TopFlightRoutes from "../components/TopFlightRoutes";
import mumbaiImg from "../images/flightCardImage/mumbai-img.png";
import ahmedabadImg from "../images/flightCardImage/ahmedabad-img.png";
import lucknowImg from "../images/flightCardImage/lucknow-img.png";
import chennaiImg from "../images/flightCardImage/chennai-img.png";
import dubaiImg from "../images/flightCardImage/dubai-img.png";
import kolkataImg from "../images/flightCardImage/kolkata-img.png";
import bangaloreImg from "../images/flightCardImage/bangalore-img.png";
import jaipurImg from "../images/flightCardImage/jaipur-img.png";
import delhiImg from "../images/flightCardImage/delhi-img.png";
import Important from "../images/Important";
import TrvlGuide from "../images/TrvlGuide";
import FamousLocation from "../components/FamousLocation";
import Andaman from "../images/famousTravelAttraction/andaman-new.png";
import Kashmir from "../images/famousTravelAttraction/Kashmir";
import Jaipur from "../images/famousTravelAttraction/Jaipur";
import Bangalore from "../images/famousTravelAttraction/Bangalore";
import Paris from "../images/famousTravelAttraction/Paris";
import Leh from "../images/famousTravelAttraction/Leh";
import BaliIndonesia from "../images/famousTravelAttraction/BaliIndonesia";
import Dubai from "../images/famousTravelAttraction/Dubai";
import London from "../images/famousTravelAttraction/London";
import Kerala from "../images/famousTravelAttraction/Kerala";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import WhyBook from "../components/whyBook/WhyBook";
import EasyBooking from "../images/whyBook/EasyBooking";
import LowestBooking from "../images/whyBook/LowestBooking";
import ExcDeal from "../images/whyBook/ExcDeal";
import Support from "../images/whyBook/Support";
import LeftArrow from "../images/hotelComponent/left-arrow.svg";
import RightArrow from "../images/hotelComponent/right-arrow.svg";
import SearchBar from "../components/searchBar/SearchBar";
import { Link } from "react-router-dom";

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
  const [slide, setSlide] = useState(null);
  const next = () => {
    if (slide) {
      if (slide.index <= 2) {
        slide.go(slide.index + 1);
      } else {
        slide.go(0);
      }
      console.log(slide.index, slide.length);
    }
  };
  const prev = () => {
    if (slide) {
      if (slide.index === 0) {
        slide.go(slide.length - 1);
      } else {
        slide.go(slide.index - 1);
      }
    }
  };
  return (
    <div className="relative">
      <Splide
        onMounted={(s) => setSlide(s)}
        options={{
          perPage: 3,
          perMove: 1,
          autoWidth: true,
          gap: 20,
          arrows: false,
          pagination: false,
          rewind: true,
        }}
        aria-label="My Favorite Images"
      >
        {items.map((item) => (
          <SplideSlide key={item.id}>{item.render}</SplideSlide>
        ))}
      </Splide>
      <div
        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-white to-transparent md:w-[200px] flex items-center justify-center"
        onClick={prev}
      >
        <img src={LeftArrow} className="cursor-pointer" />
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white to-transparent md:w-[200px]  flex items-center justify-center"
        onClick={next}
      >
        <img src={RightArrow} className="cursor-pointer" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden md:overflow-auto">
      <div className="hidden md:block relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar />
      </div>

      <div className="my-10">
        <h2 className="text-center text-[34px] font-bold">Exclusive Offers</h2>
        <div className="px-5 md:p-0 text-center text-[15px] font-medium flex flex-row justify-center gap-4 md:gap-14 mb-10 mt-5">
          <span>Best Offers</span>
          <span>Flight</span>
          <span>Hotel</span>
          <span>Bus</span>
          <span>Holidays</span>
        </div>
        <div>
          <Crousal items={crousalItems} />
        </div>
        <Link to={"/under-construction"}>
          <button className="bg-[#2196F3] rounded-full px-5 py-[5px] block m-auto text-white text-[15px] font-medium my-[15px]">
            View All Offers
          </button>
        </Link>
      </div>

      {/* Refund Section */}
      <div className="flex flex-col md:flex-row gap-5 md:mx-[140px] px-5 md:px-0">
        <div className="rounded-xl flex flex-col gap-2 md:gap-0 md:flex-row w-full md:w-[74%] full-refund">
          <div>
            <img src={refundImage} />
          </div>
          <div>
            <div>
              <span>
                Full Refund<sup>*</sup>
              </span>
              <span>Due to Medical Reasons</span>
            </div>
            <div>
              <ul>
                <li>
                  Presenting you an extraordinary offer in these unfavorable
                  circumstances..
                </li>
                <li>
                  Get a full refund on a domestic ticket in case you cancel it
                  due to medical sickness..
                </li>
                <li>
                  The Best Part - There are ZERO extra charges for this service.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={TandC_refund} />
          </div>
        </div>
        <div className="rounded-xl w-full md:w-[24%] covid-refund md:m-auto">
          <div>
            <p>claim for</p>
            <p>COVID REFUND</p>
            <p>
              here <span>{<RitArrow />}</span>
            </p>
          </div>
          <div>
            <img src={CovidRefund} />
          </div>
        </div>
      </div>

      <h1 className="text-center py-7 font-semibold text-2xl">
        Top Flight Routes
      </h1>

      <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 grid-flow-row gap-4 md:mx-[140px]">
        <TopFlightRoutes
          image={mumbaiImg}
          takeOff={"Chennai"}
          landing={"Mumbai"}
          routeCode={"MAA-BOM"}
        />
        <TopFlightRoutes
          image={ahmedabadImg}
          takeOff={"Delhi"}
          landing={"Ahmendabad"}
          routeCode={"DEL-AMD"}
        />
        <TopFlightRoutes
          image={lucknowImg}
          takeOff={"Delhi"}
          landing={"Lucknow"}
          routeCode={"DEL-LKO"}
        />
        <TopFlightRoutes
          image={chennaiImg}
          takeOff={"Mumbai"}
          landing={"Chennai"}
          routeCode={"BOM-MAA"}
        />
        <TopFlightRoutes
          image={dubaiImg}
          takeOff={"Mumbai"}
          landing={"Dubai"}
          routeCode={"BOM-DXB"}
        />
        <TopFlightRoutes
          image={kolkataImg}
          takeOff={"Mumbai"}
          landing={"Kolkata"}
          routeCode={"BOM-CCU"}
        />
        <TopFlightRoutes
          image={bangaloreImg}
          takeOff={"Hyderabad"}
          landing={"Bangalore"}
          routeCode={"HYD-BLR"}
        />
        <TopFlightRoutes
          image={jaipurImg}
          takeOff={"Mumbai"}
          landing={"Jaipur"}
          routeCode={"BOM-JAI"}
        />
        <TopFlightRoutes
          image={delhiImg}
          takeOff={"Delhi"}
          landing={"Dubai"}
          routeCode={"DEL-DXB"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:mx-[140px] py-10 px-5 md:px-0">
        <div className="flex flex-row border-2 border-blue-500 rounded-ss-full background !w-full md:w-auto">
          <div>
            <Important />
          </div>
          <div>
            <p>Important Info:</p>
            <p>To cancel/claim refund or reschedule/modify your booking.</p>
          </div>
        </div>
        <div className="flex flex-row border-2 border-blue-500 rounded-ss-full background  !w-full md:w-auto">
          <div>
            <TrvlGuide />
          </div>
          <div>
            <p>Travel Guide :</p>
            <p>
              Get latest information on airlines & airports guidelines,
              state-wise
            </p>
            <p>quarantine rules, travel checklists, web-checkin etc.</p>
          </div>
        </div>
      </div>

      {/* Famous Travel Attraction */}
      <div className="flex flex-col items-center justify-center md:mx-20">
        <h1 className="py-7 font-semibold text-2xl">
          Famous Travel Attraction
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-row gap-[30px] m-auto mt-8 mb-4">
          <FamousLocation
            image={<img className="h-[100px] w-[100px]" src={Andaman} />}
            place={"Andaman"}
          />
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

      <div className="flex flex-col items-center md:mx-[140px]">
        <div className="py-7 font-semibold text-2xl">Why book with us?</div>
        <div className="why-book flex-col gap-5 md:gap-0 md:flex-row px-5 md:p-0">
          <WhyBook
            icon={<EasyBooking />}
            head={"Easy Booking"}
            para={
              "We offer easy and convenient flight bookings with attractive offers."
            }
          />
          <WhyBook
            icon={<LowestBooking />}
            head={"Easy Booking"}
            para={
              "We offer easy and convenient flight bookings with attractive offers."
            }
          />
          <WhyBook
            icon={<ExcDeal />}
            head={"Easy Booking"}
            para={
              "We offer easy and convenient flight bookings with attractive offers."
            }
          />
          <WhyBook
            icon={<Support />}
            head={"Easy Booking"}
            para={
              "We offer easy and convenient flight bookings with attractive offers."
            }
          />
        </div>
        <div className="covid-refund">
          Customer's Refund Against Booking Made During Covid
        </div>
      </div>

      <div className="w-auto px-5 md:p-0 md:travel-package">
        <h1 className="travel-package-heading py-7 font-semibold text-2xl">
          Search Flights, Hotels, Bus and Holiday Packages
        </h1>
        <div className="travel-package-para">
          EaseMyTrip is one of the largest online travel platforms in India, and
          a trusted name in the Indian travel industry. We offer "end to end"
          travel solutions including air tickets, hotel booking, cab and bus
          booking, train tickets and holiday packages. Additionally, we offer
          ancillary value-added services.
        </div>
        <div className="travel-package-para">
          We understand that planning a trip can be overwhelming, so we have
          simplified the process to make it easy for you to find the perfect
          travel deals that suit your needs. Our website is user-friendly and
          provides a wide range of options to choose from. Whether you're
          planning a family vacation, a solo adventure, or a business trip, we
          have you covered with our comprehensive travel packages. From flights
          to hotels, car rentals to holiday packages, we offer everything you
          need to make your trip a success.
        </div>
        <div className="travel-package-para">
          We believe in transparency and honesty in all our dealings. We do not
          charge any hidden fees, and our prices are always competitive. With
          EaseMyTrip, you can be assured of getting the best travel deals in the
          market. If you're looking for a hassle-free and affordable way to plan
          your next trip, look no further than EaseMyTrip. We promise to make
          your travel experience a memorable one.
        </div>
      </div>
    </div>
  );
};

export default Home;
