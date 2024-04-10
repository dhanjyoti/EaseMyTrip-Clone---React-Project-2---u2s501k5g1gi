import React from "react";
import ComponentWhyBookTrain from "./ComponentWhyBookTrain";
import RightArrow from "../../images/trainComponent/rightarrow.svg";
import IRCTC from "../../images/trainComponent/IRCTC-logo-nw2.png";
import LiveStation from "../../images/trainComponent/LiveStation.svg";
import LiveTrain from "../../images/trainComponent/LiveStatus.svg";
import IRCTC2 from "../../images/trainComponent/FoodonTrackLogo.png";
import RefundIcon from "../../images/trainComponent/instrcb.svg";
import CustomerService from "../../images/trainComponent/CustomerService.svg";
import { Link } from "react-router-dom";

const WhyBookTrain = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold my-8">
        Why Book Train Tickets from EaseMyTrip
      </h2>
      <Link to={"/under-construction"} className="p-2 flex flex-row gap-3">
        <ComponentWhyBookTrain
          serviceIcon={IRCTC}
          heading={"IRCTC Authorized Partner"}
          para={
            "EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018."
          }
        />
        <ComponentWhyBookTrain
          serviceIcon={LiveStation}
          heading={"Live Station Status"}
          para={
            "Get a complete list of trains that shall be arriving at the railway station of your choice at the time selected by you."
          }
          rightArrow={RightArrow}
        />
        <ComponentWhyBookTrain
          serviceIcon={LiveTrain}
          heading={"Live Train Status"}
          para={
            "Get to know the Live Status of railway trains and delays, if any."
          }
          rightArrow={RightArrow}
        />
      </Link>
      <Link to={"/under-construction"} className="p-2 flex flex-row gap-3">
        <ComponentWhyBookTrain
          serviceIcon={IRCTC2}
          heading={"IRCTC Train Food Booking"}
          para={"Enjoy booking IRCTC Food & Get Food Delivered on the Train"}
          rightArrow={RightArrow}
        />
        <ComponentWhyBookTrain
          serviceIcon={RefundIcon}
          heading={"Instant Refunds and Cancellations"}
          para={
            "Get an instant refund and book your next train ticket without any hassle."
          }
        />
        <ComponentWhyBookTrain
          serviceIcon={CustomerService}
          heading={"24*7 Customer Service"}
          para={
            "We work 24 hours a day to make sure our availability whenever our customers need us."
          }
        />
      </Link>
    </div>
  );
};

export default WhyBookTrain;
