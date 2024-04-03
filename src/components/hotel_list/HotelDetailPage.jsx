import React, { useEffect, useState } from "react";
import BookingPolicy from "./BookingPolicy";
import StarRating from "../../images/hotelComponent/icon-star.svg";
import MapMaker from "../../images/hotelComponent/map-marker.svg";
import HotelImage1 from "../../images/hotelComponent/CommonciK2Rp.jpg";
import RedRupeeIcon from "../../images/hotelComponent/red_rupee.png";
import BlackRupeeIcon from "../../images/hotelComponent/rupee_new_black.svg";
import CalanderIcon from "../../images/hotelComponent/calendar_icon.svg";
import WifiIcon from "../../images/hotelComponent/wifi-icon.svg";
import LaundryService from "../../images/hotelComponent/laundry-icon.svg";
import Amenities from "../../images/hotelComponent/feather-plus.svg";
import HotelAmunities from "./HotelAmunities";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../../utils/useAuth";


const HotelDetailPage = () => {
  const [hotel, setHotel] = useState();

  const [params] = useSearchParams();
  const id = params.get("id");
  const checkin = params.get('checkin')
  const checkout = params.get('checkout')

  const navigate = useNavigate()
  const {validate}=useAuth()

  useEffect(() => {
    (async () => {
      try {
        const res = await api.hotelDetail({ id });
        console.log(res.data.data);
        setHotel(res.data.data);
      } catch (e) {}
    })();
  }, [params]);

  return hotel ? (
    <div className="my-10">
      <div className="mx-[50px] p-[10px] rounded-[5px] shadow-[0_0_7px_0_rgb(0_0_0_/_25%)]">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-baseline">
              <span className="text-[21px] font-semibold">{hotel.name}</span>
              <span className="flex flex-row">
                <img src={StarRating} />
                <img src={StarRating} />
                <img src={StarRating} />
                <img src={StarRating} />
                <img src={StarRating} />
              </span>
              <span className="border border-[#3C9AEE] text-xs py-[1px] px-[10px] font-normal rounded-[4px]">
                Hotel
              </span>
            </div>
            <div className="flex flex-row text-[#9F9C9C] text-[13px] font-medium my-[6px] gap-2">
              <img src={MapMaker} />
              <div>{hotel.location}</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="pr-2 text-right">
              <div className="text-[13px] font-semibold">Very Good</div>
              <div className="text-[#555555] text-xs">25 reviews</div>
            </div>
            <div className="bg-[#00A664] rounded-[10px] text-[13px] font-semibold p-[6px] text-white inline-block">
              {`${hotel.rating}`.padEnd(3, ".0")}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div>
              <img
                className="w-[593px] h-[310px] object-cover"
                src={hotel.images?.[0]}
              />
            </div>
            <div className="ml-2">
              {hotel.images?.filter((_,i)=>i!==0).map((image) => {
                return <div key={image}>
                  <img
                    className="w-[185px] h-[98px] mb-2 object-cover"
                    src={image}
                  />
                </div>;
              })}
            </div>
          </div>

          <div className="border-t ml-6 pt-[15px] border-[#eee] flex flex-col justify-between">
            <div className="flex flex-row justify-between">
              <div className="max-w-[214px] mr-[78px]">
                <div className="flex flex-row">
                  <p className="border-l-4 text-[11px] max-h-[18px] rounded-[3px] border-[#0c6be9] mr-[6px] mt-[2px]"></p>
                  <p className="text-[#446DCB] text-[17px] font-medium">
                    Deluxe Room NON Smoking
                  </p>
                </div>
                <p className="font-medium text-[13px] ">2 x Guest | 1 x Room</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row items-center">
                  <img src={BlackRupeeIcon} />
                  <span className="text-2xl font-semibold">
                    {Math.floor(hotel.avgCostPerNight)}
                  </span>
                </div>
                <div className="flex flex-row items-center text-xs">
                  <span>+</span>
                  <img className="h-[11px]" src={BlackRupeeIcon} />
                  <span className="font-medium">570 Taxes & fees</span>
                </div>
                <div className="text-xs">base price(Per Night)</div>
              </div>
            </div>
            <div className="flex flex-row justify-between border-y border-[#E4E2E2] mt-7 py-3 pl-2 pr-3">
              <div className="flex flex-row text-[14px] font-medium">
                <img src={CalanderIcon} />
                <span className="text-[#2196f3]">&nbsp;CHECK-IN:&nbsp;</span>
                <span>02:00 PM</span>
              </div>
              <div className="flex flex-row text-[14px] font-medium">
                <img src={CalanderIcon} />
                <span className="text-[#2196f3]">&nbsp;CHECK-IN:&nbsp;</span>
                <span>02:00 PM</span>
              </div>
            </div>
            <div className="my-[13px]">
              <ul className="flex flex-row justify-between items-center pr-3">
                <li className="flex flex-row text-[11px] bg-[#F3F9FF] px-[6px] py-1 hover:bg-[#bbdbfb]">
                  <img className="mr-1" src={WifiIcon} />
                  <p>Wi-Fi Enabled</p>
                </li>
                <li className="flex flex-row text-[11px] bg-[#F3F9FF] px-[6px] py-1 hover:bg-[#bbdbfb]">
                  <img className="mr-1" src={LaundryService} />
                  <p>Laundry Service</p>
                </li>
                <li className="flex flex-row text-[11px] bg-[#F3F9FF] px-[6px] py-1 hover:bg-[#bbdbfb]">
                  <img className="mr-1" src={Amenities} />
                  <p>34 Amenities</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <button className="text-[#2196f3] border border-[#2196f3] py-[9px] w-[47%] rounded-full font-semibold cursor-pointer">
                SELECT ROOMS
              </button>
              <button onClick={()=>{
                if(validate()){
                  navigate(`/hotel-booking?id=${id}`)
                }
              }} className="bg-[#EF6614] text-[#fff] font-semibold cursor-pointer rounded-full w-[47%]">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[10px] px-[15px] rounded-[5px] border border-[#d5d5d5] shadow-sm">
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
        <span className="py-[10px] px-[30px] hover:text-blue-600 border-b-4 hover:border-blue-600 text-sm font-semibold">
          Room
        </span>
      </div>

      <HotelAmunities />

      <BookingPolicy />
    </div>
  ) : (
    "Loading"
  );
};

export default HotelDetailPage;
