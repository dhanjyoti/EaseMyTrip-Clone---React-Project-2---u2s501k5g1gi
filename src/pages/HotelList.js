import React, { useEffect, useState } from "react";
import "../styles/hotellist.css";
import HotelSearchBar from "../components/searchBar/HotelSearchBar";
import SideBarCollapse from "../components/sidebarCollapse/SideBarCollapse";
import OfferListComponent from "../components/offerListCode/OfferListComponent";
import HotelComponent from "../components/hotel_list/HotelComponent";
import HotelImg from "../images/hotelComponent/89392_0.jpg";
import api from "../utils/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./hotel/search";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../utils/useLoading";
import useDebounce from "../utils/useDebounce";

const HotelList = () => {
  const { oneShotLoading } = useLoading();
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const location = params.get("place");
  const checkin = params.get("checkin");
  const checkout = params.get("checkout");

  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.searchHotels({ location });
        setHotels(res.data.data.hotels);
      } catch (e) {}
    })();
  }, [params]);

  useDebounce(
    async () => {
      try {
        const res = await api.filterHotels({
          location,
          price,
          rating,
        });
        setHotels(res.data.data.hotels);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    },
    500,
    [location, price, rating]
  );
  return (
    <div className="bg-blue-100">
      <div className="relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar
          location={location}
          checkin={new Date(checkin)}
          checkout={new Date(checkout)}
        />
        {/* <button className='modify-button'>Modify Search</button> */}
      </div>

      {/* <div>
        <div className="search-hotel">
          <div className="search-hotel-div">
            <ul className="flex flex-wrap items-center m-0 p-0 list-none">
              <li className="hotel-li-search">Home</li>
              <li className="hotel-li-search">
                Bangalore, India Hotels (1607)
              </li>
            </ul>
          </div>
          <div className="block relative float-right w-[252px] outline-none">
            <input
              type="text"
              placeholder="Enter hotel name or location"
              className="search-button"
            />
          </div>
        </div>
      </div> */}
      {/* // next-part */}
      <div className="flex">
        <div className="px-20">
          <div className="mt-10 max-w-xs bg-white border border-gray-300 rounded-lg p-3">
            <SideBarCollapse
              title={"PRICE (PER NIGHT)"}
              value={price}
              items={[
                { label: "₹ 3001- ₹4000", value: `"$gte":3001, "$lte":4000` },
                { label: "₹ 4001- ₹5000", value: `"$lte":5000, "$gte":4001` },
                { label: "₹ 5001- ₹6000", value: `"$gte":5001, "$lte":6000` },
                {
                  label: "₹ 6001- ₹7000",
                  value: `"$gte":6001, "$lte":7000`,
                },
                { label: "above- ₹7000", value: `"$gte":7001` },
              ]}
              onChange={(e) => {
                setPrice(e);
                oneShotLoading();
              }}
              defaultOpen={true}
            />
            {/* <SideBarCollapse
              title={"LOCATIONS"}
              items={[
                { label: "International Airport Road" },
                { label: "Indiranagar" },
                { label: "Electronic City" },
                { label: "Whitefield" },
                { label: "Marathalli" },
                { label: "Koramangala" },
              ]}
              onChange={oneShotLoading}
            /> */}
            <SideBarCollapse
              title={"STAR RATING"}
              items={[
                { label: "5 Star" },
                { label: "4 Star" },
                { label: "3 Star" },
                { label: "2 Star" },
                { label: "1 Star" },
                { label: "Unrated" },
              ]}
              onChange={oneShotLoading}
            />
            <SideBarCollapse
              title={"USER REVIEW RATING"}
              value={rating}
              items={[
                { label: "4.5 & above (Excellent)", value: `"$gte":4.5` },
                { label: "4 & above (Very Good)", value: `"$gte":4` },
                { label: "3 & above (Good)", value: `"$gte":3` },
              ]}
              onChange={(e) => {
                setRating(e);
                oneShotLoading();
              }}
            />
            <SideBarCollapse
              title={"AREA ATTRACTION"}
              items={[
                { label: "Government Museum" },
                {
                  label: "Visvesvaraya Industrial and Technological Museum",
                },
                { label: "Tipus Summer Palace" },
                { label: "Bull Temple" },
                { label: "ISKCON Temple" },
              ]}
              onChange={oneShotLoading}
            />
            <SideBarCollapse
              title={"AMENITIES"}
              items={[
                { label: "Free Cancellation" },
                { label: "24 Hour Front Desk" },
                { label: "AC" },
                { label: "Bar" },
                { label: "Wi-Fi" },
                { label: "Breakfast" },
              ]}
              onChange={oneShotLoading}
            />
            <SideBarCollapse
              title={"PROPERTY TYPE"}
              items={[
                { label: "Villas" },
                { label: "Hotel" },
                { label: "Resort" },
                { label: "Inn" },
                { label: "Residence" },
                { label: "Guest House" },
              ]}
              onChange={oneShotLoading}
            />
          </div>
        </div>
        <div>
          <div>
            <OfferListComponent />
          </div>
          <div>
            {hotels.map((hotel) => (
              <HotelComponent
                key={hotel._id}
                onClick={() => {
                  navigate(
                    `/hoteldetailpage?id=${hotel._id}&checkin=${checkin}&checkout=${checkout}`
                  );
                }}
                hotelImage={hotel.images?.[0] || HotelImg}
                hotelName={hotel.name}
                locationName={hotel.location}
                tagLine={(hotel.amenities || []).join(" | ")}
                review={"Very Good"}
                reviewPoint={"2027 reviews"}
                ratePoint={hotel.rating.toString().padEnd(3, ".0")}
                prevAmount={"3099"}
                amount={hotel.avgCostPerNight.toFixed(2)}
                taxesNfee={"614 Taxes & fees"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
