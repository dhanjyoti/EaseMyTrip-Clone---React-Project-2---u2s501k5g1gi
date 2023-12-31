import React from "react";
import SwapNewIcon from "../images/flightCardImage/swap-nw-icn.png";
import "../styles/flight.css";
import FilterCheckBox from "../components/FilterCheckBox";
import FlightRoute from "../components/flightRouteCard/FlightRoute";
import Stopage from "../components/Stopage";
import OfferListComponent from "../components/offerListCode/OfferListComponent";

const FlightList = () => {

  return (
    <div>
      <div>
        <div className="back-ground">
          <div className="flex flex-row">
            <div>
              <ul className="flex flex-row">
                <li>
                  <label>
                    <input name="trip" id="trip" type="radio" />
                    ONE WAY
                  </label>
                </li>
                <li>
                  <label>
                    <input name="trip" id="trip" type="radio" />
                    ROUND TRIP
                  </label>
                </li>
                <li>
                  <label>
                    <input name="trip" id="trip" type="radio" />
                    MULTICITY
                  </label>
                </li>
              </ul>
              <div className="flex flex-row">
                <div>
                  <input type="text" placeholder="From" />
                </div>
                <span>
                  <img src={SwapNewIcon} />
                </span>
                <div>
                  <input type="text" placeholder="To" />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div>DEPARTURE DATE</div>
                <input type="date" />
              </div>
              <div>
                <div>RETURN DATE</div>
                <input type="date" />
              </div>
              <div>
                <div>TRAVELLER</div>
                <div>
                  <span>1</span>
                  <span>Travellers</span>
                  <span></span>
                </div>
              </div>
              <div>
                <div>CLASS</div>
                <div>
                  <span>Economy</span>
                  <span></span>
                </div>
              </div>
            </div>
            <div>
              <button className="search-button">Search</button>
            </div>
          </div>
          <div>
            <ul className="flex flex-row">
              <li>
                <label>
                  <input type="checkbox" />
                  Defence Forces
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Students
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Senior Citizens
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Doctors Nurses
                </label>
              </li>
            </ul>
          </div>
        </div>
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
