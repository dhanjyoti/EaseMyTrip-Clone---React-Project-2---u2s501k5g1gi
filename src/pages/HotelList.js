import React from "react";
import "../styles/hotellist.css";
import HotelSearchBar from "../components/searchBar/HotelSearchBar";
import SideBarCollapse from "../components/sidebarCollapse/SideBarCollapse";
import OfferListComponent from "../components/offerListCode/OfferListComponent";
import HotelComponent from "../components/hotel_list/HotelComponent";
import HotelImg from "../images/hotelComponent/89392_0.jpg";

const HotelList = () => {
  return (
    <div className="bg-blue-100">
      <div className="main-form border-2 border-green-500">
        <HotelSearchBar />
        {/* <button className='modify-button'>Modify Search</button> */}
      </div>

      <div>
        <div className="h-20"></div>
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
      </div>
      {/* // next-part */}
      <div className="flex">
        <div className="px-20">
          <div className="mt-10 max-w-xs bg-white border border-gray-300 rounded-lg p-3">
            <SideBarCollapse
              title={"PRICE (PER NIGHT)"}
              items={[
                { label: "₹ 2001- ₹4000" },
                { label: "₹ 4001- ₹8000" },
                { label: "₹ 8001- ₹20000" },
                { label: "₹ 20001- ₹30000" },
                { label: "above- ₹30000" },
              ]}
              defaultOpen={true}
            />
            <SideBarCollapse
              title={"LOCATIONS"}
              items={[
                { label: "International Airport Road" },
                { label: "Indiranagar" },
                { label: "Electronic City" },
                { label: "Whitefield" },
                { label: "Marathalli" },
                { label: "Koramangala" },
              ]}
            />
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
            />
            <SideBarCollapse
              title={"USER REVIEW RATING"}
              items={[
                { label: "4.5 & above (Excellent)" },
                { label: "4 & above (Very Good)" },
                { label: "3 & above (Good)" },
              ]}
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
            />
          </div>
        </div>
        <div>
          <div>
            <OfferListComponent />
          </div>
          <div>
            <HotelComponent
              hotelImage={HotelImg}
              hotelName={"The Chancery Pavilion"}
              locationName={"Richmond Circle"}
              tagLine={"Couple Friendly | Free wifi"}
              review={"Very Good"}
              reviewPoint={"2027 reviews"}
              ratePoint={"4.0"}
              prevAmount={"3099"}
              amount={"2399"}
              taxesNfee={"614 Taxes & fees"}
            />
            <HotelComponent
              hotelImage={HotelImg}
              hotelName={"The Chancery Pavilion"}
              locationName={"Richmond Circle"}
              tagLine={"Couple Friendly | Free wifi"}
              review={"Very Good"}
              reviewPoint={"2027 reviews"}
              ratePoint={"4.0"}
              prevAmount={"3099"}
              amount={"2399"}
              taxesNfee={"614 Taxes & fees"}
            />
            <HotelComponent
              hotelImage={HotelImg}
              hotelName={"The Chancery Pavilion"}
              locationName={"Richmond Circle"}
              tagLine={"Couple Friendly | Free wifi"}
              review={"Very Good"}
              reviewPoint={"2027 reviews"}
              ratePoint={"4.0"}
              prevAmount={"3099"}
              amount={"2399"}
              taxesNfee={"614 Taxes & fees"}
            />
            <HotelComponent
              hotelImage={HotelImg}
              hotelName={"The Chancery Pavilion"}
              locationName={"Richmond Circle"}
              tagLine={"Couple Friendly | Free wifi"}
              review={"Very Good"}
              reviewPoint={"2027 reviews"}
              ratePoint={"4.0"}
              prevAmount={"3099"}
              amount={"2399"}
              taxesNfee={"614 Taxes & fees"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;