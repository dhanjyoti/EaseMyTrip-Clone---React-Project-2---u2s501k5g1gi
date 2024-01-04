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

const amunities = [
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
console.log("hello")

const HotelAmunities = () => {
  return (
    <div className="p-[10px] rounded-[5px] shadow-[0_0_7px_0_rgb(0_0_0_/_25%)] mx-[73px] my-3">
      <h3>AMENITIES</h3>
      <div>
        <div className="flex flex-row">
            <img src={HotelFacilitiesIcon}/>
          <div className="pl-[15px] border-l-[3px] border-[#C9D9EF]">
            <h3>Facilities</h3>
            <div className="">
            {amunities.map((item) => {
              return (<AmenitiesComponent facility={item.icon} para={item.para} />);
            })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAmunities;
