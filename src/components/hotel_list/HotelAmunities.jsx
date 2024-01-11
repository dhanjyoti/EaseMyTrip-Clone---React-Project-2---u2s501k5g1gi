import React from "react";
import AmenitiesComponent from "./AmenitiesComponent";
import HotelFacilitiesIcon from "../../images/hotelComponent/Facilities.svg";
import AirConditioning from "../../images/hotelComponent/air-conditioning.svg";
import Reception24Hours from "../../images/hotelComponent/24-hour-reception.svg";
import HotelSafe from "../../images/hotelComponent/hotel-safe.svg";
import CurrencyExchange from "../../images/hotelComponent/currency-exchange.svg";
import Newspaper from "../../images/hotelComponent/newspaper-kiosk.svg";
import BarIcon from "../../images/hotelComponent/bars.svg";
import Restaurant from "../../images/hotelComponent/restaurants.svg";
import ConferenceRoom from "../../images/hotelComponent/conference-room.svg";
import InternetAccess from "../../images/hotelComponent/internet-access.svg";
import WlanAccess from "../../images/hotelComponent/wlan-access.svg";
import RoomServices from "../../images/hotelComponent/room-service.svg";
import LaundryService from "../../images/hotelComponent/laundry-icon.svg";
import MedicalAssistance from "../../images/hotelComponent/medical-assistance.svg";
import CarPark from "../../images/hotelComponent/car-park.svg";
import HotelType from "../../images/hotelComponent/Hotel-Type.svg";
import CityHotel from "../../images/hotelComponent/city-hotel.svg";
import Payment from "../../images/hotelComponent/Payment.svg";
import AmericnExpress from "../../images/hotelComponent/american-express.svg";
import Visa from "../../images/hotelComponent/visa.svg";
import MasterCard from "../../images/hotelComponent/mastercard.svg";
import RoomFacilities from "../../images/hotelComponent/Room-Facilities.svg";
import Bathroom from "../../images/hotelComponent/bathroom.svg";
import Shower from "../../images/hotelComponent/shower.svg";
import Hairdryer from "../../images/hotelComponent/hairdryer.svg";
import DirectDialTelephone from "../../images/hotelComponent/direct-dial telephone.svg";
import Satellite from "../../images/hotelComponent/satellite-cable-tv.svg";
import MiniBar from "../../images/hotelComponent/minibar.svg";
import CentralHeating from "../../images/hotelComponent/central-heating.svg";
import Safe from "../../images/hotelComponent/safe.svg";
import TV from "../../images/hotelComponent/tv.svg";
import TeaCoffeeMaker from "../../images/hotelComponent/tea-coffee-maker.svg";
import SportsEntertainment from "../../images/hotelComponent/Sport-Entertainment.svg";
import Gym from "../../images/hotelComponent/gym.svg";

const facilities = [
  {
    icon: AirConditioning,
    para: "air conditioning",
  },
  {
    icon: Reception24Hours,
    para: "24 hours reception",
  },
  {
    icon: Reception24Hours,
    para: "24-hour check-in"
  },
  {
    icon: HotelSafe,
    para: "hotel safe",
  },
  {
    icon: CurrencyExchange,
    para: "currency exchange"
  },
  {
    icon: Newspaper,
    para: "newspaper kiosk"
  },
  {
    icon: BarIcon,
    para: "bar(s)"
  },
  {
    icon: Restaurant,
    para: "restaurant(s)"
  },
  {
    icon: ConferenceRoom,
    para: "conference room"
  },
  {
    icon: InternetAccess,
    para: "internet access"
  },
  {
    icon: WlanAccess,
    para: "wlan access"
  },
  {
    icon: RoomServices,
    para: "room services"
  },
  {
    icon: LaundryService,
    para: "laundry services"
  },
  {
    icon: MedicalAssistance,
    para: "medical assistance"
  },
  {
    icon: CarPark,
    para: "car park"
  }
];
const payment = [
  {
    icon: AmericnExpress,
    para: "american express"
  },
  {
    icon: Visa,
    para: "visa"
  },
  {
    icon: MasterCard,
    para: "mastercard"
  }
]


const HotelAmunities = () => {
  return (
    <div className="p-[10px] rounded-[5px] shadow-[0_0_7px_0_rgb(0_0_0_/_25%)] mx-[73px] my-3">
      <h3>AMENITIES</h3>
      <div className="mr-24">
        <div className="flex flex-row">
            <img className="self-start" src={HotelFacilitiesIcon}/>
          <div className="pl-[15px] border-l-[3px] border-[#C9D9EF]">
            <h3>Facilities</h3>
            <ul className="flex flex-row flex-wrap gap-y-4 items-center">
            {facilities.map((item) => {
              return (<AmenitiesComponent facility={item.icon} para={item.para} />);
            })}
            </ul>
          </div>
        </div>

        <div className="flex flex-row">
          <img className="self-start" src={HotelType} />
          <div className="pl-[15px] border-l-[3px] border-[#C9D9EF]">
            <h3>Hotel Type</h3>
            <ul>
              <AmenitiesComponent facility={CityHotel} para={"city hotel"} />
            </ul>
          </div>
        </div>

        <div className="flex flex-row">
          <img className="self-start" src={Payment} />
          <div className="pl-[15px] border-l-[3px] border-[#C9D9EF]">
            <h3>Payment</h3>
            <ul className="flex flex-row justify-between items-center">
            {payment.map((item) => {
              return (<AmenitiesComponent facility={item.icon} para={item.para} />);
            })}
            </ul>
          </div>
        </div>

        <div className="flex flex-row">
          <img className="self-start" src={Payment} />
          <div className="pl-[15px] border-l-[3px] border-[#C9D9EF]">
            <h3>Room Facilities</h3>
            <ul className="flex flex-row justify-between items-center">
            {payment.map((item) => {
              return (<AmenitiesComponent facility={item.icon} para={item.para} />);
            })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAmunities;
