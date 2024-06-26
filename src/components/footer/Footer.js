import React from "react";
import "./footer.css";
import EaseMyTrip from "../../images/footerImage/EMTLogo_white.png";
import GooglePlay from "../../images/footerImage/androidft.png";
import AppStore from "../../images/footerImage/iosnovft.png";
import QrCode from "../../images/footerImage/qrcode.png";
import BottomImage from "../../images/footerImage/botft.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="flex flex-col md:flex-row justify-between gap-8 px-5 md:px-10 py-5">
        <div className="md:w-[833px]">
          <img src={EaseMyTrip} />
          <div>
            <p className="text-white text-[13px]">
              EaseMyTrip offers 'End to End' travel solutions including air
              tickets for more than 400 international and domestic airlines,
              hotel bookings for nearly 1 million hotels in India and abroad,
              cab booking with 4000+ cab operators, bus tickets with 2000+ bus
              operators, and railway tickets in India for all major cities.
            </p>
          </div>
        </div>
        <div>
          <div className="text-white text-base pb-5">
            Download EaseMyTrip App
          </div>
          <div className="flex flex-row gap-4">
            <Link to={"/under-construction"}>
              <img className="w-[125px] h-[41px]" src={GooglePlay} />
            </Link>
            <Link to={"/under-construction"}>
              <img className="w-[125px] h-[41px]" src={AppStore} />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-white text-base pb-5">SCAN QR CODE</div>
          <Link to={"/under-construction"}>
            <img className="w-[74px] h-[74px]" src={QrCode} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-t border-t-[#4A4747] px-4 py-3">
        <p className="text-[#707070] text-sm py-[6px] px-5">
          Copyright © 2024 EaseMyTrip
        </p>
        <img className="w-[515px] h-[29px]" src={BottomImage} />
      </div>
    </div>
  );
};

export default Footer;
