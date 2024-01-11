import React, { useState } from "react";
import BusTravelDetails from "./BusTravelDetails";
import BusSeatSelector from "./bus-seat-selector";
import BusBenefit from "./BusBenefit";
import Search from "./search";
import Calander from "../../components/calander/Calander";
import "./bus.css";
import BusIcon from "../../images/bus_Icons/location-icon.svg";
import SwipeIcon from "../../images/bus_Icons/swipe-icn.png";

const places = ["Bangalore", "Pune", "Delhi", "Chennai", "Goa"];
const Bus = () => {
  const [openSeatSelector, setOpenSeatSelector] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <div className="bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] p-4 px-[155px] pt-[38px] pb-[70px]">
        <h2 className="text-right text-white text-xl font-semibold mb-[10px]">Online Bus Tickets</h2>
        <div className="flex flex-row rounded-md overflow-hidden bg-white shadow-[4px_4px_4px_rgb(49_144_140_/_75%)]">
          <div className="flex flex-row basis-[200%] relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"><img src={SwipeIcon}/></div>
          <Search
            options={async () =>
              places.map((p) => ({
                label: p,
                value: p,
                render: () => (
                  <div key={p} className="flex flex-row items-center gap-lg">
                    <img src={BusIcon} />
                    <span>{p}</span>
                  </div>
                ),
              }))
            }
            placeholder={"Source City"}
            className="pr-6"
          />
          <Search
            options={async () =>
              places.map((p) => ({
                label: p,
                value: p,
                render: () => (
                  <div key={p} className="flex flex-row items-center gap-lg">
                    <img src={BusIcon} />
                    <span>{p}</span>
                  </div>
                ),
              }))
            }
            placeholder={"Destination City"}
            className="pl-6 border-l-2"
          />
          </div>
          <div className={"flex basis-full bg-white pl-6 border-l-2 h-[60px]"}>
          <Calander
            selected={selectedDate}
            className={"basis-full bg-white h-full"}
            customInput={
              <input className="h-full w-full outline-none font-bold text-xl" />
            }
          />
          </div>
          <button className="basis-3/4 border-l-2 text-lg font-semibold text-white bg-[#ef6614] hover:bg-[#e86212]">SEARCH</button>
        </div>
      </div>
      <button onClick={() => setOpenSeatSelector(true)}>Select seats</button>
      <BusSeatSelector
        open={openSeatSelector}
        setOpen={setOpenSeatSelector}
        busDetail={{
          seats: 35,
        }}
      />
      <BusTravelDetails />
      <BusBenefit />
    </div>
  );
};

export default Bus;
