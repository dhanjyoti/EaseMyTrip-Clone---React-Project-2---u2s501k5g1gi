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
export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const SearchBar = ({checkin, checkout, location}) => {
  const places = [
    {
      place: "Delhi",
      country: "India"
    },
    {
      place: "Bangalore",
      country: "India"
    },
    {
      place: "Mumbai",
      country: "India"
    },
    {
      place: "Kolkota",
      country: "India"
    },
    {
      place: "Goa",
      country: "India"
    },
  ];


  const [place, setPlace] = useState(location?places.find((l)=>l.place === location):places[0]);
  const [openPlace, setOpenPlace]=useState(false)

  useEffect(() => {
    setPlace(places[0]);
  }, []);
useEffect(()=>{
    if(location){
        setPlace(places.find((l)=>l.place === location))
    }
},[location])

  const [departureDate, setDepartureDate] = useState(checkin || new Date());
  const [returnDate, setReturnDate] = useState(checkout || new Date());

  return (
    <div className="flex flex-col gap-4 px-28">
      <div className="flex flex-row bg-white rounded-md shadow-lg p-0.5">
        <div
          className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative basis-full"
          onClick={() => setOpenPlace((prev) => !prev)}
        >
          <div className="text-sm text-black/40">Enter City name, Location or Specific hotel</div>
          <div className="font-bold text-lg">{place?.place}</div>
          <div className="text-sm">{place?.country}</div>
          <div className="absolute z-10 w-[400px] top-2/3">
            <SearchList
              open={openPlace}
              items={places}
              placeholder={"City"}
              onClick={(e) => setPlace(e)}
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
        <Calander
          selected={departureDate}
          onChange={setDepartureDate}
          customInput={
            <div className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative basis-full">
              <div className="text-sm text-black/40">Check In</div>
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
        <Calander
          selected={returnDate}
          onChange={setReturnDate}
          customInput={
            <div className="flex flex-col gap-1 hover:bg-sky-50 p-2 cursor-pointer relative flex-1">
            <div className="text-sm text-black/40">Check Out</div>
            <div className="font-bold text-lg flex flex-row items-center gap-3">
              <span className="flex flex-row items-baseline gap-1">
                {returnDate.getDate()}
                <span className="text-sm">
                  {months[returnDate.getMonth()]}'
                  {returnDate.getFullYear()}
                </span>
              </span>
              <span>
                <img src={CalanderIcon} />
              </span>
            </div>
            <div className="text-xs truncate">
              {weekdays[returnDate.getDay()]}
            </div>
          </div>
          }
        />

        <a
          href={`/hotellist?place=${place.place}&checkin=${departureDate.toJSON()}&checkout=${returnDate.toJSON()}`}
          className="bg-[#ef6614] uppercase text-white text-xl font-bold flex items-center justify-center px-7 -m-0.5 ml-0 rounded-r-md"
        >
          Search
        </a>
      </div>
    </div>
  );
};
export default SearchBar;
