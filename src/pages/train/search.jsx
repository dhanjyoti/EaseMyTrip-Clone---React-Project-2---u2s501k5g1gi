import { useEffect, useState } from "react";
import SwapIcon from "../../images/searchlist/swap-icon.svg";
import CalanderIcon from "../../images/searchlist/calender_icon.svg";
import WebCheckinIcon from "../../images/WebCheckinIcon";
import SearchList from "../../components/search-list/SearchList";
import Calander from "../../components/calander/Calander";
import RadioOption from "../../components/searchBar/RadioOption";

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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const SearchBar = ({ f, t, d }) => {
  const places = [
    {
      place: "Ahmedabad Junction",
    },
    {
      place: "Allahabad Junction",
    },
    {
      place: "Anand Junction",
    },
    {
      place: "Asansol Junction",
    },
    {
      place: "Bhubaneshwar",
    },
    {
      place: "Bhopal Junction",
    },
    {
      place: "Vadodara Junction",
    },
    {
      place: "Varanasi Junction",
    },
  ];

  const [from, setFrom] = useState(
    f ? places.find((l) => l.place === f) : places[0]
  );
  const [to, setTo] = useState(
    t ? places.find((l) => l.place === t) : places[0]
  );
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  useEffect(() => {
    setFrom(places[0]);
  }, []);


  const [departureDate, setDepartureDate] = useState(d || new Date());

  return (
    <div className="flex flex-col gap-4 px-28">
      <div className="flex flex-row bg-white rounded-md shadow-lg p-0.5">
        <div
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative basis-full search-parent-from"
          onClick={() => setOpenFrom((prev) => !prev)}
        >
          <div className="text-sm text-black/40">From</div>
          <div className="font-bold text-lg">{from?.place}</div>
          <div className="absolute z-10 w-[400px] top-2/3">
            <SearchList
            parent={"search-parent-from"}
              open={openFrom}
              items={places}
              placeholder={"City"}
              onClick={(e) => setFrom(e)}
              onClose={()=>{
                setOpenFrom(false)
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
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative basis-full search-parent-to"
          onClick={() => setOpenTo((prev) => !prev)}
        >
          <div className="text-sm text-black/40">To</div>
          <div className="font-bold text-lg">{to?.place}</div>
          <div className="absolute z-10 w-[400px] top-2/3">
            <SearchList
            parent={"search-parent-to"}
              open={openTo}
              items={places}
              placeholder={"City"}
              onClick={(e) => setTo(e)}
              onClose={()=>{
                setOpenTo(false)
              }}
            />
          </div>
        </div>
        <Calander
          selected={departureDate}
          onChange={setDepartureDate}
          customInput={
            <div className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative basis-full">
              <div className="text-sm text-black/40">Departure date</div>
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
        <a
          href={`/trainlist?from=${
            from?.place
          }&to=${to?.place}&date=${departureDate.toJSON()}&day=${weekdays[departureDate.getDay()]?.substring(
            0,
            3
          )}`}

          onClick={(e)=>{
            if(from.place === to.place){
              e.preventDefault()
              alert("Source and destination cannot be same.")
            }
          }}
          className="bg-[#ef6614] uppercase text-white text-xl font-bold flex items-center justify-center px-7 -m-0.5 ml-0 rounded-r-md"
        >
          Search
        </a>
      </div>
    </div>
  );
};
export default SearchBar;
