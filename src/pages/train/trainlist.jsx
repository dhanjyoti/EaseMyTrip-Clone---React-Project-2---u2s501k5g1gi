import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./search";
import TrainCard from "./TrainCard";
import { Accordion } from "@radix-ui/react-accordion";
import SideBarCollapse from "../../components/sidebarCollapse/SideBarCollapse";

const TrainList = () => {
  // const [trains, setTrains] = useState([]);

  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");
  const day = params.get("day");

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
      <div className="relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar f={from} t={to} d={new Date(date)} />
      </div>

      <div className="flex flex-row mx-[130px]">
        <div className="pt-6 pr-3 border-r border-r-[#E3DFDF]">
          <div className="bg-white w-[240px] h-[800px] border border-[#E3DFDF]">
            <SideBarCollapse
              title={"Departure Time all Stations"}
              items={[
                { label: "Early Morning" },
                { label: "Morning" },
                { label: "Afternoon" },
                { label: "Night" },
              ]}
            />
            <SideBarCollapse
              title={"Arrival Time"}
              items={[
                { label: "Early Morning" },
                { label: "Morning" },
                { label: "Afternoon" },
                { label: "Night" },
              ]}
            />
            <SideBarCollapse
              title={"Fare Classes"}
              items={[
                { label: "Sleeper Classes(SL)" },
                { label: "AC 3 tier Economy(3E)" },
                { label: "Third AC(3A) " },
                { label: "AC 2 tier(2A)" },
                { label: "First AC(1A)" },
                { label: "AC Chair Car(CC)" },
                { label: "Executive Class(EC)" },
                { label: "Second Seating(2S)" },
              ]}
            />
            <SideBarCollapse
              title={"Fare Classes"}
              items={[
                { label: "OTHERS" },
                { label: "Special Shuvidha Trains" },
                { label: "Satabdi" },
                { label: "Rajdhani" },
                { label: "Garib Rath" },
                { label: "Jan Satabdi" }
              ]}
            />
          </div>
        </div>

        <div className="pl-3 pt-6">
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
