import React, { useState } from "react";
import SwapNewIcon from "../images/flightCardImage/swap-nw-icn.png";
import "../styles/flight.css";
import FilterCheckBox from "../components/FilterCheckBox";
import FlightRoute from "../components/flightRouteCard/FlightRoute";
import Stopage from "../components/Stopage";
import OfferListComponent from "../components/offerListCode/OfferListComponent";
import Calander from "../components/calander/Calander";
import SearchList from "../components/search-list/SearchList";

const fromPoint = [
  {
      place: "Delhi(DEL)",
      airport: "Indra Gandhi International Airport",
      country: "India",
  },
  {
      place: "Bangalore(BLR)",
      airport: "Bangalore International Airport",
      country: "India",
  },
  {
      place: "Mumbai(BOM)",
      airport: "Chattrapathi Sivaji International Airport",
      country: "India",
  },
  {
      place: "Kolkota(CCU)",
      airport: "Netaji Subhash Chandra Bose Airport",
      country: "India",
  }, {
      place: "Goa(GOI)",
      airport: "Dobalim Goa International Airport",
      country: "India",
  }
]

const FlightList = () => {

  const [fromOpen, setFromOpen]=useState(false)
  const [toOpen, setToOpen]=useState(false)
  const [selectedDate, setSelectedDate]=useState(new Date())
  const [fromCity, setFromCity]=useState({})
  const [toCity, setToCity]=useState({})

  return (
    <div>
      <div className="flex flex-col">
        <div></div>
        <div className="flex flex-row items-center">
          <div className="relative">
            <input value={fromCity?.place} placeholder="From"  readOnly onClick={()=>setFromOpen(prev=>!prev)}/>
            <div className="absolute z-20  w-[400px]">
            <SearchList open={fromOpen} items={fromPoint} placeholder={"From"} onClick={setFromCity}/>
            </div>
          </div>
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
              <FlightRoute />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
