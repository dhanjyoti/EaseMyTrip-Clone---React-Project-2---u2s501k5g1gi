import React from "react";
import IconAirplane from "../images/IconAirplane";

const TopFlightRoutes = ({ image, takeOff, landing, routeCode }) => {
  return (
    <div className="flex flex-row gap-2">
      <img className="rounded-md shrink-0" src={image} />
      <div>
        <div className="flex flex-row items-center gap-2">
          <span>{takeOff}</span>
          <span>
            <IconAirplane />
          </span>
          <span>{landing}</span>
        </div>
        <div>{routeCode}</div>
      </div>
    </div>
  );
};

export default TopFlightRoutes;
