import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./search";
import TrainCard from "./TrainCard";

const TrainList = () => {
  // const [trains, setTrains] = useState([]);

  // const [params] = useSearchParams();
  // const from = params.get("from");
  // const to = params.get("to");
  // const date = params.get("date");
  // const day = params.get("day");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await api.searchTrains({ src: from, dest: to, day });
  //       setTrains(res.data.data.trains);
  //     } catch (e) {}
  //   })();
  // }, [params]);
  return (
    <div className="bg-[#E8F2FA]">

      {/* <div className="relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar f={from} t={to} d={new Date(date)}/>
      </div> */}

      <div className="flex flex-row mx-[130px]">  
        <div className="pt-6 pr-3 border-r border-r-[#E3DFDF]">
          <div className="bg-white w-[240px] h-[800px] border border-[#E3DFDF]"></div>
        </div>

        <div className="p-2">
          <TrainCard />

          {/* {trains.map((train) => (
            <div key={train._id}>{train.trainName}</div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TrainList;
