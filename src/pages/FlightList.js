import React, { useEffect, useState } from "react";
import SwapNewIcon from "../images/flightCardImage/swap-nw-icn.png";
import "../styles/flight.css";
import FilterCheckBox from "../components/FilterCheckBox";
import FlightRoute from "../components/flightRouteCard/FlightRoute";
import IndigoIcon from '../images/flightCardImage/Indigo6E.png'
import Stopage from "../components/Stopage";
import OfferListComponent from "../components/offerListCode/OfferListComponent";
import Calander from "../components/calander/Calander";
import SearchList from "../components/search-list/SearchList";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import FlightCard from "../components/flightCard/FlightCard";
// import SwapNewIcon from "../images/swap-nw-icn.png";

const fromPoint = [
  {
    place: "Delhi(DEL)",
    code:"DEL",
    airport: "Indra Gandhi International Airport",
    country: "India",
  },
  {
    place: "Bangalore(BLR)",
    code:"BLR",
    airport: "Bangalore International Airport",
    country: "India",
  },
  {
    place: "Mumbai(BOM)",
    code:"BOM",
    airport: "Chattrapathi Sivaji International Airport",
    country: "India",
  },
  {
    place: "Kolkota(CCU)",
    code:"CCU",
    airport: "Netaji Subhash Chandra Bose Airport",
    country: "India",
  },
  {
    place: "Goa(GOI)",
    code:"GOI",
    airport: "Dobalim Goa International Airport",
    country: "India",
  },
];

const FlightList = () => {

  const [fromOpen, setFromOpen]=useState(false)
  const [toOpen, setToOpen]=useState(false)
  const [selectedDate, setSelectedDate]=useState(new Date())
  const [fromCity, setFromCity]=useState({})
  const [toCity, setToCity]=useState({})

  const [flights, setFlights] = useState([])

  const [params] = useSearchParams()
  const src = params.get('src')
  const dest = params.get('dest')
  const day = params.get('day')
  const date = params.get('date')

  useEffect(()=>{
    (async()=>{
      try{
        const res = await api.searchFlights({src, dest, day})
        setFlights(res.data.flights)
      }catch(e){

      }
    })()  

    setFromCity(fromPoint.find((fp)=>fp.code === src))
    setToCity(fromPoint.find((fp)=>fp.code === dest))
    setSelectedDate(new Date(date))
  },[params])

  return (
    <div>
      <div className="flex flex-col bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-2">
        <div></div>
        <div className="flex flex-row items-center justify-between mx-[155px] ">
          <div className="relative">
            <input className="placeholder-sky-300)" value={fromCity?.place} placeholder="From"  readOnly onClick={()=>setFromOpen(prev=>!prev)}/>
            <div className="absolute z-20  w-[400px]">
            <SearchList open={fromOpen} items={fromPoint} placeholder={"From"} onClick={setFromCity}/>
            </div>
          </div>
          <div><img src={SwapNewIcon} /></div>
          <div className="relative">
            <input placeholder="To" value={toCity?.place}  readOnly onClick={()=>setToOpen(prev=>!prev)}/>
            <div className="absolute z-20  w-[400px]">
            <SearchList open={toOpen} items={fromPoint} placeholder={"To"} onClick={setToCity}/>
            </div>
          </div>
          <Calander selected={selectedDate} onChange={setSelectedDate}/>
          <select>
            <option>Economy</option>
            <option>Prem.Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
          <button className="border border-white rounded-full text-white text-base py-[9px] px-7 font-semibold">SEARCH</button>
        </div>
      </div>
      <div>
        <div className="flex flex-row max-w-full">
          <div className="flex flex-col border-2 border-gray-400 w-60 px-4">
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
              <input type="range" className="w-52" />
              <p>Rs. 22911 - Rs.57751</p>
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
            <div><OfferListComponent/></div>
            <div className="w-[955px] px-4">
              <div>
                {flights.map((flight)=>{
                  return <FlightCard
                  key={flight._id}
                  id={flight._id}
                  flightIcon={IndigoIcon}
                  flightName={"Indigo"}
                  flightNumber={flight.flightID}
                  departureTime={flight.departureTime}
                  departurePlace={"Delhi"}
                  travelTime={flight.duration+"hrs"}
                  stop={flight.stops === 0 ? "non-stop":flight.stops+" stop(s)"}
                  arrivalTime={flight.arrivalTime}
                  arrivalPlace={"Mumbai"}
                  price={flight.ticketPrice}
              />
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
