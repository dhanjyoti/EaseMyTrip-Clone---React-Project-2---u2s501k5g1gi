import React from "react";
import StarIcon from '../../images/hotelComponent/icon-star.svg'

const HotelComponent = ({ hotelImage }) => {
  return (
    <div className="p-2 border border-[#c9d7e1] rounded-2xl flex flex-row">
      <div>
        <div className="w-[293px] h-[232px]">
          <img className="rounded-2xl" src={hotelImage} />
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row items-baseline">
            <span>The Chancery Pavilion</span>
            <span>
                <ul className="flex flex-row">
                    <li><img src={StarIcon}/></li>
                    <li><img src={StarIcon}/></li>
                    <li><img src={StarIcon}/></li>
                    <li><img src={StarIcon}/></li>
                    <li><img src={StarIcon}/></li>
                </ul>
            </span>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
