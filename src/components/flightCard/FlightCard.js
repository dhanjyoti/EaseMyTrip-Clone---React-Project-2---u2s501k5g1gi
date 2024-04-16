import React, { useState } from "react";
import "./flightCard.css";
import RupeesIcon from "../../images/RupeesIcon";
import Arrow from "../../images/flightCardImage/arow_main.png";
import Alarm from "../../images/alarm.png";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const FlightCard = ({
  id,
  flightIcon,
  flightName,
  flightNumber,
  departureTime,
  departurePlace,
  travelTime,
  way,
  plus,
  minus,
  stop,
  arrivalTime,
  arrivalPlace,
  price,
}) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const navigate = useNavigate();
  const { validate } = useAuth();

  return (
    <div className="flex flex-col items-start px-4 py-2 my-[10px] transition-shadow duration-400 shadow-[0_0_10px_0_rgb(0_0_0_/_15%)] hover:shadow-[0_0_15px_0_rgb(0_0_0_/_35%)]">
      <div className="flex flex-row items-center gap-2 pl-2 justify-between w-full">
        <div className="flex flex-row items-center justify-center">
          <div className="w-12 h-12 flex items-center">
            <img className="pr-3" src={flightIcon} />
          </div>
          <div>
            <div>{flightName}</div>
            <div>{flightNumber}</div>
          </div>
        </div>
        <div>
          <div>{departureTime}</div>
          <div>{departurePlace}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>{travelTime}</div>
          <div>
            <img src={Arrow} />
          </div>
          <div>
            <span>{way}</span>
            <span>{plus}</span>
            <span>{minus}</span>
            <span>{stop}</span>
          </div>
        </div>
        <div>
          <div>{arrivalTime}</div>
          <div>{arrivalPlace}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <RupeesIcon />
            <strong className="price">{price}</strong>
          </div>
          {/* <button className="morefare-button">+ More Fare</button> */}
        </div>
        <div className="shrink-0">
          <button
            className="py-[6px] px-3 rounded-full text-white bg-[#ef6614] hover:bg-orange-700 transition-all"
            onClick={() => {
              if (validate()) {
                navigate(`/flight-booking?id=${id}`);
              }
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div
        className="text-sky-500 py-3 cursor-pointer"
        onClick={() => setDetailVisible((prev) => !prev)}
      >
        Flight Details
      </div>
      {detailVisible && (
        <div className="w-full text-sm">
          <div className="flex flex-row gap-6 justify-between items-start">
            <div className="flex flex-row gap-4">
              <div>
                <img className="ml-2 w-5 h-5 object-cover" src={flightIcon} />
              </div>
              <div className="flex flex-col items-center">
                <div>{flightName}</div>
                <div>{flightNumber}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>{departureTime}</div>
              <div>{departurePlace}</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img src={Alarm} />
              </div>
              <div>{travelTime}</div>
            </div>
            <div className="flex flex-col items-center">
              <div>{arrivalTime}</div>
              <div>{arrivalPlace}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCard;
