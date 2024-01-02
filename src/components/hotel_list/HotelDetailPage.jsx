import React from "react";
import BookingPolicy from "./BookingPolicy";
import StarRating from "../../images/hotelComponent/icon-star.svg";
import MapMaker from "../../images/hotelComponent/map-marker.svg";
import HotelImage1 from "../../images/hotelComponent/CommonciK2Rp.jpg";

const HotelDetailPage = () => {
  return (
    <div className="my-44">
      <div className="mx-[50px] p-[10px] rounded-[5px] shadow-[0_0_7px_0_rgb(0_0_0_/_25%)]">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-baseline">
              <span className="text-[21px] font-semibold">
                Zion A Luxurious Hotel Bangalore
              </span>
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
            <div className="flex flex-row text-[#9F9C9C] text-[13px] font-medium my-[6px]">
              <img src={MapMaker} />
              <div>
                31 W.H. Hanumanthappa Road 5Th Main Off Race Course Road
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="pr-2 text-right">
              <div className="text-[13px] font-semibold">Very Good</div>
              <div className="text-[#555555] text-xs">25 reviews</div>
            </div>
            <div className="bg-[#00A664] rounded-[10px] text-[13px] font-semibold p-[6px] text-white inline-block">5.0</div>
          </div>
        </div>

        <div className="flex flex-row">
            <div className="flex flex-row ">
                <div><img className="w-[593px] h-[310px]" src={HotelImage1}/></div>
                <div className="ml-2">
                    <div><img className="w-[185px] h-[98px] mb-2" src={HotelImage1}/></div>
                    <div><img className="w-[185px] h-[98px] mb-2" src={HotelImage1}/></div>
                    <div><img className="w-[185px] h-[98px]" src={HotelImage1}/></div>
                </div>
            </div>

            <div className="border-t ml-6 pt-[15px] border-[#eee]">
                iysddpiuvdsafg
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
      <BookingPolicy />
    </div>
  );
};

export default HotelDetailPage;
