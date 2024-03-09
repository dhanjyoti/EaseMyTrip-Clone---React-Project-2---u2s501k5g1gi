import React from "react";
import StarIcon from "../../images/hotelComponent/icon-star.svg";
import LocationIcon from "../../images/hotelComponent/placeholderloc.svg";
import Tag5 from "../../images/hotelComponent/ta-5.png";
import DiscountIcon from "../../images/hotelComponent/discount-logo.svg";
import RedRupee from "../../images/hotelComponent/red_rupee.png";
import BlackRupee from "../../images/hotelComponent/rupee_new_black.svg";

const HotelComponent = ({
  hotelImage,
  hotelName,
  locationName,
  tagLine,
  review,
  reviewPoint,
  ratePoint,
  prevAmount,
  amount,
  taxesNfee,
  onClick
}) => {
  return (
    <div className="py-2 pl-2 my-3 border bg-white border-[#c9d7e1] rounded-2xl flex flex-row mr-[50px] transition-shadow duration-400 shadow-[0_0_10px_0_rgb(197_197_197_/_70%)] hover:shadow-[0_0_10px_0_rgb(33_150_243_/_70%)]">
      <div>
        <div>
          <img onClick={onClick} className="rounded-xl w-[293px] h-[202px] cursor-pointer" src={hotelImage} />
        </div>
      </div>

      <div className="flex flex-row mt-3 pl-4">
      {/* Second Part */}
        <div className="flex flex-col justify-between pr-32">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-baseline gap-3">
              <span className="text-base font-semibold">{hotelName}</span>
              <span>
                <ul className="flex flex-row">
                  <li>
                    <img src={StarIcon} />
                  </li>
                  <li>
                    <img src={StarIcon} />
                  </li>
                  <li>
                    <img src={StarIcon} />
                  </li>
                  <li>
                    <img src={StarIcon} />
                  </li>
                  <li>
                    <img src={StarIcon} />
                  </li>
                </ul>
              </span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <img src={LocationIcon} />
              </span>
              <span className="text-[#808080] text-xs font-medium">
                {locationName}
              </span>
            </div>
            <div className="text-[#808080] font-semibold text-[11px]">
              {tagLine}
            </div>
            <div>
              <img className="w-[89px] h-4" src={Tag5} />
            </div>
          </div>

          <div className="">
            <span className="bg-[#f7e1ff] flex flex-row items-center px-2 py-2 max-w-[187px] rounded-full">
              <img className="w-4 h-4" src={DiscountIcon} />
              <strong className="text-[11px] pl-1">
                EMTSTAY Discount Applied
              </strong>
            </span>
          </div>
        </div>
        {/* Third part */}
        <div className="flex flex-col items-end justify-between border-l border-[#ebebeb] w-40">
          <div className="flex flex-row items-center gap-[6px]">
            <div>
              <div className="text-xs font-semibold">{review}</div>
              <div className="text-[#555555] text-[10px]">{reviewPoint}</div>
            </div>
            <div className="bg-[#2451BC] text-[13px] font-semibold text-white py-1 px-[5px] max-w-8 max-h-8 rounded-[5px]">
              {ratePoint}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img className="w-[7px] h-[10px]" src={RedRupee} />
            <s className="text-[#d63b05] font-semibold text-[13px]">
              {prevAmount}
            </s>
          </div>
          <div className="flex flex-row">
            <img src={BlackRupee} />
            <span className="text-2xl font-semibold">{amount}</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[12px]">+</span>
            <span>
              <img className="w-[9px] h-[12px]" src={BlackRupee} />
            </span>
            <span className="text-[11px]">{taxesNfee}</span>
          </div>
          <div className="text-[#737373] text-[11px]">Per Night</div>
          <div onClick={onClick} className="cursor-pointer text-white bg-[#ef6614] py-[7px] ml-4 w-[150px] self-baseline text-center text-sm rounded-[40px]">View Room</div>
          <div className="text-[#2196f3] text-xs font-semibold pr-2">Login & Save more&#62;</div>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
