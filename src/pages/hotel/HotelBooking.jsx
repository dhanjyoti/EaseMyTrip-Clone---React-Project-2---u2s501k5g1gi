import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import medicalCoverage from "../../images/flightCardImage/coverage-icon-v1.svg";
import RightTeak from "../../images/flightCardImage/blueticknw.svg";
import LikeIcon from "../../images/flightCardImage/f-icon-9.png";
import Payment from "../payment/Payment";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import commons from "../../utils/commons";
import { useBooking } from "../../utils/useBooking";
import MedicinePolicy from "../../components/medicine-policy/MedicinePolicy";

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
const HotelBooking = () => {
  const [hotel, setHotel] = useState();
  const navigate = useNavigate();
  const { setBooking } = useBooking();

  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.hotelDetail({ id });
        setHotel(res.data.data);
        // setSource(
        //   fromPoint.find((fp) => fp.code === res.data.data.source).place
        // );
        // setDestination(
        //   fromPoint.find((fp) => fp.code === res.data.data.destination).place
        // );
        console.log(res, id);
      } catch (e) {}
    })();
  }, [params]);

  return (
    hotel && (
      <div className="flex flex-row gap-7 px-14 py-5 max-w-[1280px] m-auto">
        <div className="flex flex-col gap-6 flex-1">
          <HeaderItem header={"Hotel Detail"}>
            <div className="p-5 shadow-md">
              <div className="shadow-md p-3 ">
                <div>{hotel.name}</div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col fontb">
                    <span>{hotel.location}</span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </HeaderItem>

          <MedicinePolicy />
          <div className="shadow-sm shadow-[#b8d0e5] rounded text-xs">
            <div className="flex flex-row items-center border-b border-[#c4e4b8] gap-2 bg-[#dcfbd0] pt-[6px] px-6 pb-2">
              <img className="w-[34px] h-[34px]" src={LikeIcon} />
              <div>
                <h3 className="text-[15px] font-semibold">Good to Know</h3>
                <p>Information you should know </p>
              </div>
            </div>
            <ul className="list-disc mx-9 py-2">
              <li>
                15 Kgs per passenger Check-in Baggage included for your selected
                hotel on the sector Delhi to Mumbai
              </li>
              <li>
                Airline Cancellation Fee is Rs 3180 per passenger for your
                selected hotel on the sector Delhi to Mumbai
              </li>
              <li>Remember to web check-in before arriving at the airport</li>
              <li>Face masks are advisable</li>
            </ul>
          </div>

          <div className="shadow-sm shadow-[#b8d0e5] rounded bg-[#e3f8fa] text-xs py-[10px] px-6">
            <h3 className="text-[15px] font-semibold">Important Information</h3>
            <ul className="list-disc px-3">
              <li className="pt-2">
                Wearing face masks is no longer compulsory. However, it’s highly
                advised to wear masks to stay protected from threats imposed by
                COVID-19.
              </li>
              <li className="pt-1">
                Travellers can check the detailed travel guidelines issued by
                the Indian government.{" "}
                <span className="text-[#337ab7]">Click here...</span> to know
                more.
              </li>
            </ul>
          </div>

          <Payment
            onSuccess={(name) => {
              console.log(name);
              setBooking({
                type: "hotel",
                id: hotel._id,
                name: hotel.name,
                extra: hotel.location,
                price: `₹ ${Math.floor(hotel.avgCostPerNight)}`,
                userName: name,
              });
              navigate(`/booking-success`);
            }}
            price={`₹ ${Math.floor(hotel.avgCostPerNight)}`}
          />
        </div>
        <div className="flex flex-col w-[20%]">
          <div className="flex overflow-hidden rounded w-full p-1.5">
            <div className="shadow-md flex flex-col w-full rounded">
              <div
                className="h-[50px] flex flex-row items-center px-3 rounded-t"
                style={{
                  background:
                    "linear-gradient(90deg, #c7dffe 0%, #d8f2ff 100%)",
                }}
              >
                Price Summary
              </div>
              <div className="flex flex-col divide-y">
                <div className="py-1 px-3 text-xs flex flex-row justify-between items-center">
                  <span>Adult x 1</span>{" "}
                  <span>₹ {Math.floor(hotel.avgCostPerNight)}</span>
                </div>
                <div className="py-1 px-3 text-xs flex flex-row justify-between items-center">
                  <span>Medical Refund Policy</span>{" "}
                  <span className="text-green-600">free</span>
                </div>
                <div className="py-1 px-3 text-lg font-bold text-red-600 flex flex-row justify-between items-center">
                  <span>Grand Total</span>{" "}
                  <span>₹ {Math.floor(hotel.avgCostPerNight)}</span>
                </div>
                <button
                  onClick={() => {
                    let paymentBlock = document.querySelector(".payment-block");
                    console.log(paymentBlock);
                    if (paymentBlock) {
                      paymentBlock.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="h-[35px] mt-3 bg-[#ef6614] text-white text-[11px] rounded-md px-[10px] py-[2px] font-semibold"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HotelBooking;
