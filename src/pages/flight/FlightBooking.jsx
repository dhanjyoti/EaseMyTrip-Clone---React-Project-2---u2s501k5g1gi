import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
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
const FlightBooking = () => {
  const [flight, setFlight] = useState();
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  const navigate = useNavigate();

  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.flightDetail({ id });
        setFlight(res.data.data);
        setSource(
          fromPoint.find((fp) => fp.code === res.data.data.source).place
        );
        setDestination(
          fromPoint.find((fp) => fp.code === res.data.data.destination).place
        );
        console.log(res, id);
      } catch (e) {}
    })();
  }, [params]);

  return (
    flight && (
      <div className="flex flex-row gap-7 px-14 py-5">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col rounded overflow-hidden p-1.5">
            <div
              className="h-[50px] flex flex-row items-center px-3"
              style={{
                background: "linear-gradient(90deg, #c7dffe 0%, #d8f2ff 100%)",
              }}
            >
              Flight Detail
            </div>
            <div className="p-5 shadow-md">
              <div className="shadow-md p-3 ">
                <div>
                  {source} - {destination} | Sat-09 Mar2024
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col fontb">
                    <span className="font-semibold">Indigo</span>
                    <span>{flight.flightID}</span>
                    <span>ECONOMY</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl">
                      {flight.departureTime}
                    </span>
                    <span>{source}</span>
                    <span>Sat-09Mar2024</span>
                    <span>Terminal - 3</span>
                  </div>
                  <div></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl">
                      {flight.arrivalTime}
                    </span>
                    <span>{destination}</span>
                    <span>Sun-10Mar2024</span>
                    <span>Terminal - 2</span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
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
                  <span>Adult x 1</span> <span>₹ {flight.ticketPrice}</span>
                </div>
                <div className="py-1 px-3 text-xs flex flex-row justify-between items-center">
                  <span>Medical Refund Policy</span> <span className="text-green-600">free</span>
                </div>
                <div className="py-1 px-3 text-lg font-bold text-red-600 flex flex-row justify-between items-center">
                  <span>Grand Total</span> <span>₹ {flight.ticketPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FlightBooking;
