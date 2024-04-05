import { useEffect, useState } from "react";
import SwapIcon from "../../images/searchlist/swap-icon.svg";
import CalanderIcon from "../../images/searchlist/calender_icon.svg";
import classNames from "classnames";
import WebCheckinIcon from "../../images/WebCheckinIcon";
import SearchList from "../search-list/SearchList";
import TravallerClass from "../travaller-class/TravallerClass";
import Calander from "../calander/Calander";
import RadioOption from "./RadioOption";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TripTab = ({ onChange, active }) => {
  const items = [
    {
      label: "One Way",
      value: "one-way",
    },
    {
      label: "Round Trip",
      value: "round-trip",
    },
    {
      label: "Multicity",
      value: "multicity",
    },
  ];
  return (
    <div className="flex flex-row items-center">
      {items.map((item) => (
        <div
          key={item.value}
          className={classNames(
            "cursor-pointer text-xs font-bold px-2 py-1 rounded-full hover:bg-white hover:text-[#1853a2]",
            active == item.value ? "bg-white text-[#1853a2]" : "text-[#cad5f5]"
          )}
          onClick={() => onChange?.(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
const SearchBar = () => {
  const fromPoint = [
    {
      place: "Delhi(DEL)",
      code: "DEL",
      airport: "Indra Gandhi International Airport",
      country: "India",
    },
    {
      place: "Bangalore(BLR)",
      code: "BLR",
      airport: "Bangalore International Airport",
      country: "India",
    },
    {
      place: "Mumbai(BOM)",
      code: "BOM",
      airport: "Chattrapathi Sivaji International Airport",
      country: "India",
    },
    {
      place: "Kolkota(CCU)",
      code: "CCU",
      airport: "Netaji Subhash Chandra Bose Airport",
      country: "India",
    },
    {
      place: "Goa(GOI)",
      code: "GOI",
      airport: "Dobalim Goa International Airport",
      country: "India",
    },
  ];

  const toPoint = [
    {
      place: "Delhi(DEL)",
      code: "DEL",
      airport: "Indra Gandhi International Airport",
      country: "India",
    },
    {
      place: "Bangalore(BLR)",
      code: "BLR",
      airport: "Bangalore International Airport",
      country: "India",
    },
    {
      place: "Mumbai(BOM)",
      code: "BOM",
      airport: "Chattrapathi Sivaji International Airport",
      country: "India",
    },
    {
      place: "Kolkota(CCU)",
      code: "CCU",
      airport: "Netaji Subhash Chandra Bose Airport",
      country: "India",
    },
    {
      place: "Goa(GOI)",
      code: "GOI",
      airport: "Dobalim Goa International Airport",
      country: "India",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [fromOpen, setFromOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState(fromPoint[0]);

  useEffect(() => {
    setSelectedFrom(fromPoint[0]);
  }, []);

  const [toOpen, setToOpen] = useState(false);
  const [selectedTo, setSelectedTo] = useState(toPoint[0]);

  useEffect(() => {
    setSelectedTo(toPoint[0]);
  }, []);

  const [travellerOpen, setTravellerOpen] = useState(false);

  const [travellerOption, setTravellerOption] = useState({
    adults: 1,
    childs: 0,
    infants: 0,
    class: "Economy",
  });

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const [activeTripTab, setActiveTripTab] = useState("one-way");
  return (
    <div className="flex flex-col gap-4 px-28">
      <div className="flex flex-row justify-between">
        <TripTab active={activeTripTab} onChange={setActiveTripTab} />
        <div className="text-xl font-bold text-white">Search Lowest Price</div>
      </div>
      <div className="flex flex-row bg-white rounded-md shadow-lg p-0.5">
        <div
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1 search-parent-from"
          onClick={() => setFromOpen((prev) => !prev)}
        >
          <div className="text-sm text-black/40">FROM</div>
          <div className="font-bold text-lg">{selectedFrom?.place}</div>
          <div className="text-xs truncate">{selectedFrom?.airport}</div>
          <div className="absolute z-10 w-[400px] top-2/3">
            <SearchList
            parent={"search-parent-from"}
              open={fromOpen}
              items={fromPoint}
              placeholder={"From"}
              onClick={(e) => setSelectedFrom(e)}
              onClose={()=>{
                setFromOpen(false)
              }}
            />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <span className="w-[2px] h-full bg-gray-200 block"></span>
          <img
            src={SwapIcon}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1 search-parent-to"
          onClick={() => setToOpen((prev) => !prev)}
        >
          <div className="text-sm text-black/40">TO</div>
          <div className="font-bold text-lg">{selectedTo?.place}</div>
          <div className="text-xs truncate">{selectedTo?.airport}</div>
          <div className="absolute z-10 w-[400px] top-2/3">
            <SearchList
            parent={"search-parent-to"}
              open={toOpen}
              items={toPoint}
              placeholder={"TO"}
              onClick={(e) => setSelectedTo(e)}
              onClose={(e)=>{
                // console.log(!e, "toOpen")
                setToOpen(false)
              }}
            />
          </div>
        </div>
        <Calander
          selected={departureDate}
          onChange={setDepartureDate}
          className="flex-1"
          customInput={
            <div className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1">
              <div className="text-sm text-black/40">DEPARTURE DATE</div>
              <div className="font-bold text-lg flex flex-row items-center gap-3">
                <span className="flex flex-row items-baseline gap-1">
                  {departureDate.getDate()}
                  <span className="text-sm">
                    {months[departureDate.getMonth()]}'
                    {departureDate.getFullYear()}
                  </span>
                </span>
                <span>
                  <img src={CalanderIcon} />
                </span>
              </div>
              <div className="text-xs truncate">
                {weekdays[departureDate.getDay()]}
              </div>
            </div>
          }
        />
        {/* <Calander
          selected={returnDate}
          onChange={setReturnDate}
          customInput={
            <div className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1">
              <div className="text-sm text-black/40">RETURN DATE</div>
              <div className="font-bold text-lg flex flex-row items-center gap-3">
                {activeTripTab === "return-trip" && (
                  <span className="flex flex-row items-baseline gap-1">
                    {returnDate.getDate()}
                    <span className="text-sm">
                      {months[returnDate.getMonth()]}'{returnDate.getFullYear()}
                    </span>
                  </span>
                )}
                {activeTripTab === "one-way" && (
                  <span className="text-sm font-thin text-black/80">
                    Book a round trip to save more
                  </span>
                )}
                <span>
                  <img src={CalanderIcon} />
                </span>
              </div>
              <div className="text-xs truncate">
                {weekdays[returnDate.getDay()]}
              </div>
            </div>
          }
        /> */}
        <div
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1 traveller"
          onClick={() => setTravellerOpen((prev) => !prev)}
        >
          <div className="text-sm text-black/40">TRAVELLER & CLASS</div>
          <span className="font-bold text-lg">
            {travellerOption.adults +
              travellerOption.childs +
              travellerOption.infants}{" "}traveller(s)
          </span>
          <div className="text-xs truncate">{travellerOption.class}</div>
          <div className="absolute z-10 top-2/3">
            <TravallerClass
              open={travellerOpen}
              onChange={setTravellerOption}
              onClose={()=>{
                setTravellerOpen(false)
              }}
            />
          </div>
        </div>
        <a
          href={`/flightlist?src=${selectedFrom.code}&dest=${
            selectedTo.code
          }&day=${weekdays[departureDate.getDay()].substring(
            0,
            3
          )}&date=${departureDate.toJSON()}`}
          className="bg-[#ef6614] uppercase text-white text-xl font-bold flex items-center justify-center px-7 -m-0.5 ml-0 rounded-r-md"
        >
          Search
        </a>
      </div>
      <div className="flex flex-row items-center justify-between">
        <RadioOption/>
        <div className="web-checkin flex flex-row">
          <div>
            <WebCheckinIcon />
          </div>
          <div>Web Check-In</div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
