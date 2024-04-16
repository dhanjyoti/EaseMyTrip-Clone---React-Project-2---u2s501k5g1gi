import { useState } from "react";
import medicalCoverage from "../../images/flightCardImage/coverage-icon-v1.svg";
import RightTeak from "../../images/flightCardImage/blueticknw.svg";

const MedicinePolicy = () => {
  const [policy, setPolicy] = useState("yes");
  return (
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
            Get full airline refund, if you cancel tickets due to illness or
            sickness. This service is provided at sickness. This service is
            provided at <b>ZERO additional charges</b>.
          </p>
        </div>
      </div>
      <div className="pl-6 bg-[#f7f7f7] py-3">
        <p className="flex flex-row gap-2 pb-[6px]">
          <input
            id="yes-policy"
            className="w-[18px]"
            type="radio"
            name="select"
            checked={policy === "yes"}
            value={"yes"}
            onChange={({ target }) => {
              setPolicy(target.value);
            }}
          />
          <label htmlFor="yes-policy">
            Yes, I want to add Medical Refund Policy (FREE) to this hotel
          </label>
        </p>
        <p className="flex flex-row gap-2">
          <input
            id="no-policy"
            className="w-[18px]"
            type="radio"
            name="select"
            checked={policy === "no"}
            value={"no"}
            onChange={({ target }) => {
              setPolicy(target.value);
            }}
          />
          <label htmlFor="no-policy">
            No, I don't wish to add Medical Refund Policy (FREE) to this hotel
          </label>
        </p>
      </div>
    </div>
  );
};

export default MedicinePolicy;
