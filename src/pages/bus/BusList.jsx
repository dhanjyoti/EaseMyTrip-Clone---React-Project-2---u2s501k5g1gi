import React from "react";
import BusDetailsCard from "./BusDetailsCard";

const BusList = () => {
  return (
    <div className="bg-[#E8F2FA]">
      <div className="flex flex-row justify-center gap-4 py-4">
        <div className="w-[250px] border border-[#b8d0e5] rounded-[4px] bg-white"></div>
        <div className="p-4 border border-[#b8d0e5] rounded-[4px] flex flex-col gap-2 bg-white">
          <BusDetailsCard />
          <BusDetailsCard />
          <BusDetailsCard />
          <BusDetailsCard />
          <BusDetailsCard />
          <BusDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default BusList;
