import React, { useEffect, useState } from "react";
import BusDetailsCard from "./BusDetailsCard";
import BusSearchBar from "./searchbar";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";

const BusList = () => {
  const [buses, setBuses] = useState([]);

  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");
  const day = params.get("day");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.searchBuses({ src: from, dest: to, day });
        setBuses(res.data.data.buses);
      } catch (e) {}
    })();
  }, [params]);
  return (
    <div>
      <BusSearchBar s={from} d={to} date={new Date(date)}/>
    <div className="bg-[#E8F2FA]">
      <div className="flex flex-row justify-center gap-4 py-4">
        <div className="w-[250px] border border-[#b8d0e5] rounded-[4px] bg-white"></div>
        <div className="p-4 border border-[#b8d0e5] rounded-[4px] flex flex-col gap-2 bg-white">
          {buses.map((bus)=><BusDetailsCard key={bus._id} {...bus} />)}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BusList;
