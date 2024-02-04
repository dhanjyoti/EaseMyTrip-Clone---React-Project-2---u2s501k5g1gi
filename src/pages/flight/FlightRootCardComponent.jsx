import React from "react";
import FlightRouteCard from '../../components/flightRouteCard/FlightRouteCard'

const FlightRootCardComponent = () => {
  return (
    <div className="mx-[145px] mb-10">
      <FlightRouteCard
        place={"Mumbai"}
        date={"Monday 18 Dec 2023"}
        flightName={"Indigo"}
        price={4972}
      />
      <FlightRouteCard
        place={"Bangalore"}
        date={"Wednesday 06 Dec 2023"}
        flightName={"Indigo"}
        price={6053}
      />
      <FlightRouteCard
        place={"GOA"}
        date={"Tuesday 12 Dec 2023"}
        flightName={"Indigo"}
        price={4699}
      />
      <FlightRouteCard
        place={"Chennai"}
        date={"Tuesday 05 Dec 2023"}
        flightName={"Indigo"}
        price={5272}
      />
      <FlightRouteCard
        place={"Pune"}
        date={"Thursday 07 Dec 2023"}
        flightName={"Indigo"}
        price={4998}
      />
      <FlightRouteCard
        place={"Ahmedabad"}
        date={"Thursday 07 Dec 2023"}
        flightName={"Indigo"}
        price={3833}
      />
    </div>
  );
};

export default FlightRootCardComponent;
