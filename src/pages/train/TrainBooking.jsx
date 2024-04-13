import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import medicalCoverage from "../../images/flightCardImage/coverage-icon-v1.svg";
import RightTeak from "../../images/flightCardImage/blueticknw.svg";
import LikeIcon from "../../images/flightCardImage/f-icon-9.png";
import Payment from "../payment/Payment";
import commons from "../../utils/commons";
import { useBooking } from "../../utils/useBooking";

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
const TrainBooking = () => {
  const [train, setTrain] = useState();
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  const navigate = useNavigate();
  const { setBooking } = useBooking();

  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.trainDetail({ id });
        setTrain(res.data.data);
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
    train && (
      <div className="flex flex-row gap-7 px-14 py-5 mx-20">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col rounded overflow-hidden p-1.5">
            <div
              className="h-[50px] flex flex-row items-center px-3"
              style={{
                background: "linear-gradient(90deg, #c7dffe 0%, #d8f2ff 100%)",
              }}
            >
              Train Detail
            </div>
            <div className="p-5 shadow-md">
              <div className="shadow-md p-3 ">
                <div>
                  {train.source} - {train.destination} | Sat-09 Mar2024
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col fontb">
                    <span className="font-semibold">{train.trainName}</span>
                    <span>{train.trainNumber}</span>
                    <span>{train.trainType}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Departure time</span>
                    <span className="font-bold text-2xl">
                      {train.departureTime}
                    </span>
                    <span>{source}</span>
                  </div>
                  <div></div>
                  <div className="flex flex-col">
                    <span>Arrival time</span>
                    <span className="font-bold text-2xl">
                      {train.arrivalTime}
                    </span>
                    <span>{destination}</span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="shadow-sm shadow-[#b8d0e5] rounded text-xs">
            <div className="flex flex-row gap-2 px-3 py-3">
              <img src={medicalCoverage} alt="medical coverage" />
              <div>
                <p className="flex flex-row gap-1">
                  <h3 className="text-[#2196f3] text-[15px] font-semibold">
                    FREE Medical Refund Policy
                  </h3>
                  <img src={RightTeak} />
                </p>
                <p>
                  Get full airline refund, if you cancel tickets due to illness
                  or sickness. This service is provided at sickness. This
                  service is provided at <b>ZERO additional charges</b>.
                </p>
              </div>
            </div>
            <div className="pl-6 bg-[#f7f7f7] py-3">
              <p className="flex flex-row gap-2 pb-[6px]">
                <input className="w-[18px]" type="radio" name="select" />
                <p>
                  Yes, I want to add Medical Refund Policy (FREE) to this train
                </p>
              </p>
              <p className="flex flex-row gap-2">
                <input className="w-[18px]" type="radio" name="select" />
                <p>
                  No, I don't wish to add Medical Refund Policy (FREE) to this
                  train
                </p>
              </p>
            </div>
          </div>

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
                train on the sector Delhi to Mumbai
              </li>
              <li>
                Airline Cancellation Fee is Rs 3180 per passenger for your
                selected train on the sector Delhi to Mumbai
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
              setBooking({
                type: "train",
                id: train._id,
                name: train.trainName,
                extra: `${train.source} - ${train.destination}`,
                price: `₹ ${Math.floor(train.fare)}`,
                userName: name,
              });
              navigate(`/booking-success`);
            }}
            price={`₹ ${Math.floor(train.fare)}`}
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
                  <span>Adult x 1</span> <span>₹ {train.fare}</span>
                </div>
                <div className="py-1 px-3 text-xs flex flex-row justify-between items-center">
                  <span>Medical Refund Policy</span>{" "}
                  <span className="text-green-600">free</span>
                </div>
                <div className="py-1 px-3 text-lg font-bold text-red-600 flex flex-row justify-between items-center">
                  <span>Grand Total</span> <span>₹ {train.fare}</span>
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

export default TrainBooking;
