import React, { useEffect, useState } from "react";
import SwapNewIcon from "../images/flightCardImage/swap-nw-icn.png";
import "../styles/flight.css";
import FilterCheckBox from "../components/FilterCheckBox";
import FlightRoute from "../components/flightRouteCard/FlightRoute";
import IndigoIcon from "../images/flightCardImage/Indigo6E.png";
import Stopage from "../components/Stopage";
import OfferListComponent from "../components/offerListCode/OfferListComponent";
import Calander from "../components/calander/Calander";
import SearchList from "../components/search-list/SearchList";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import FlightCard from "../components/flightCard/FlightCard";
// import SwapNewIcon from "../images/swap-nw-icn.png";
import Slider from "@mui/material/Slider";
import { weekdays } from "../components/searchBar/SearchBar";

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

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

const useDebounce = (action, delay, dep = []) => {
  // State and setters for debounced value
  // const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      let resp = () => {};
      // Update debounced value after delay
      const handler = setTimeout(() => {
        resp = action();
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
        if (typeof resp === 'function') {
          resp();
        }
      };
    },
    [delay, ...dep] // Only re-call effect if value or delay changes
  );
};

const FlightList = () => {
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fromCity, setFromCity] = useState({});
  const [toCity, setToCity] = useState({});
  const [price, setPrice] = useState([500, 10000]);

  const [flights, setFlights] = useState([]);

  const [params, setParams] = useSearchParams();
  const src = params.get("src");
  const dest = params.get("dest");
  const day = params.get("day");
  const date = params.get("date");

  const [fromTempCity, setFromTempCity] = useState();
  const [toTempCity, setToTempCity] = useState();

  useDebounce(async () => {
    try {
      const res = await api.flightFilterPrice({
        src,
        dest,
        day,
        lowerPrice: price[1],
        upperPrice: price[0],
      });
      setFlights(res.data.data.flights);
      console.log(res.data)
    } catch (e) {
      console.log(e);
    }
  }, 500, [price]);

  const updateValue = (e, data) => {
    setPrice(data);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await api.searchFlights({ src, dest, day });
        setFlights(res.data.flights);
      } catch (e) {}
    })();

    let f = fromPoint.find((fp) => fp.code === src);
    setFromCity(f);
    setFromTempCity(f);
    let t = fromPoint.find((fp) => fp.code === dest);
    setToCity(t);
    setToTempCity(t);
    setSelectedDate(new Date(date));
  }, [params]);

  const inputCss =
    "placeholder-white bg-[#ffffff1a] p-1.5 rounded text-white font-bold";
  return (
    <div>
      <div className="flex flex-col bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-2">
        <div></div>
        <div className="flex flex-row gap-2 items-center justify-between mx-[155px] ">
          <div className="relative">
            <input
              className={inputCss}
              value={fromCity?.place}
              placeholder="From"
              readOnly
              onClick={() => setFromOpen((prev) => !prev)}
            />
            <div className="absolute z-20  w-[400px]">
              <SearchList
                open={fromOpen}
                items={fromPoint}
                placeholder={"From"}
                onClick={setFromCity}
              />
            </div>
          </div>
          <div>
            <img src={SwapNewIcon} className="min-w-[20px]" />
          </div>
          <div className="relative">
            <input
              className={inputCss}
              placeholder="To"
              value={toCity?.place}
              readOnly
              onClick={() => setToOpen((prev) => !prev)}
            />
            <div className="absolute z-20  w-[400px]">
              <SearchList
                open={toOpen}
                items={fromPoint}
                placeholder={"To"}
                onClick={setToCity}
              />
            </div>
          </div>
          <Calander
            selected={selectedDate}
            onChange={setSelectedDate}
            customInput={
              <div className={inputCss}>{formatDate(selectedDate)}</div>
            }
          />
          <select className={inputCss + " outline-none"}>
            <option>Economy</option>
            <option>Prem.Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
          <button
            onClick={() => {
              setParams({
                src: fromCity.code,
                dest: toCity.code,
                day: weekdays[selectedDate.getDay()].substring(0, 3),
                data: selectedDate.toJSON(),
              });
            }}
            className="border border-white rounded-full text-white text-base py-[9px] px-7 font-semibold"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-row max-w-full justify-center">
          <div className="flex flex-col border-2 border-gray-400 h-fit py-5 w-60 px-4">
            <div>
              <h2>FILTER</h2>
            </div>
            <div>
              <h3>Popular Filters</h3>
              <div>
                <FilterCheckBox name={"Nonstop"} />
                <FilterCheckBox name={"Morning Departure"} />
                <FilterCheckBox name={"Vistara"} />
                <FilterCheckBox name={"Air India"} />
                <FilterCheckBox name={"AksaraAir"} />
                <FilterCheckBox name={"Indigo"} />
                <FilterCheckBox name={"Air India Express"} />
                <FilterCheckBox name={"Air India Express"} />
                <FilterCheckBox name={"SpiceJet"} />
              </div>
            </div>
            <div>
              <h3>Price Range</h3>
              <div className="w-full m-1">
                <Slider
                  min={500}
                  max={10000}
                  value={price}
                  onChange={updateValue}
                  valueLabelDisplay="auto"
                />
              </div>
              {/* <input type="range" className="w-52" name="price" min="5000" max="50000" step="1" value={price} onChange={(e)=>setPrice(e.target.value)} /> */}
              <p>
                Rs.{price[0]} - Rs.{price[1]}
              </p>
            </div>
            <div>
              <h3>Stops</h3>
              <div className="flex flex-row gap-[6px]">
                <Stopage stopsNumber={"0"} stops={"Nonstop"} />
                <Stopage stopsNumber={"1"} stops={"Stop"} />
                <Stopage stopsNumber={"2+"} stops={"Stop"} />
              </div>
            </div>
            <div>
              <h3>Aircraft</h3>
              <FilterCheckBox name={"Airbus A320"} />
              <FilterCheckBox name={"Airbus A2IN"} />
              <FilterCheckBox name={"Boeing B78P"} />
              <FilterCheckBox name={"Boeing B738"} />
              <FilterCheckBox name={"Airbus A20N"} />
              <FilterCheckBox name={"Airbus A321"} />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <OfferListComponent />
            </div>
            <div className="w-[955px] px-4">
              <div>
                {flights?.map((flight) => {
                  return (
                    <FlightCard
                      key={flight._id}
                      id={flight._id}
                      flightIcon={IndigoIcon}
                      flightName={"Indigo"}
                      flightNumber={flight.flightID}
                      departureTime={flight.departureTime}
                      departurePlace={fromTempCity.place}
                      travelTime={flight.duration + "hrs"}
                      stop={
                        flight.stops === 0
                          ? "non-stop"
                          : flight.stops + " stop(s)"
                      }
                      arrivalTime={flight.arrivalTime}
                      arrivalPlace={toTempCity.place}
                      price={flight.ticketPrice}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
