import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./search";
import TrainCard from "./TrainCard";
import { Accordion } from "@radix-ui/react-accordion";
import SideBarCollapse from "../../components/sidebarCollapse/SideBarCollapse";
import { useLoading } from "../../utils/useLoading";
import { Slider } from "@mui/material";
import useDebounce from "../../utils/useDebounce";

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const { oneShotLoading } = useLoading();
  const [price, setPrice] = useState([500, 10000]);
  const [trainType, setTrainType] = useState("");

  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");
  const day = params.get("day");

  useDebounce(
    async () => {
      try {
        const res = await api.filterTrains({
          src: from,
          dest: to,
          day,
          lowerPrice: price[1],
          upperPrice: price[0],
          type: trainType,
        });
        setTrains(res.data.data.trains);
        console.log(res.data.data.trains);
      } catch (e) {
        setTrains([]);
        console.log(e);
      }
    },
    500,
    [price, trainType]
  );

  const updateValue = (e, data) => {
    setPrice(data);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await api.searchTrains({ src: from, dest: to, day });
        setTrains(res.data.data.trains);
      } catch (e) {}
    })();
  }, [params]);

  return (
    <div className="bg-[#E8F2FA]">
      <div className="relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar f={from} t={to} d={new Date(date)} />
      </div>

      <div className="flex flex-row mx-[130px]">
        <div className="pt-6 pr-3 border-r border-r-[#E3DFDF]">
          <div className="bg-white w-[240px] h-[800px] border border-[#E3DFDF] px-4">
            <div>
              <h3>Price Range</h3>
              <div className="w-full m-1">
                <Slider
                  min={500}
                  max={10000}
                  value={price}
                  onChange={updateValue}
                  valueLabelDisplay="auto"
                />
              </div>
              {/* <input type="range" className="w-52" name="price" min="5000" max="50000" step="1" value={price} onChange={(e)=>setPrice(e.target.value)} /> */}
              <p>
                Rs.{price[0]} - Rs.{price[1]}
              </p>
            </div>
            <SideBarCollapse
              title={"Departure Time all Stations"}
              items={[
                { label: "Early Morning" },
                { label: "Morning" },
                { label: "Afternoon" },
                { label: "Night" },
              ]}
              onChange={oneShotLoading}
            />
            <SideBarCollapse
              title={"Arrival Time"}
              items={[
                { label: "Early Morning" },
                { label: "Morning" },
                { label: "Afternoon" },
                { label: "Night" },
              ]}
              onChange={oneShotLoading}
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
              onChange={oneShotLoading}
            />
            <SideBarCollapse
              title={"Train"}
              value={trainType}
              items={[
                { label: "Express", value: `"Express"` },
                {
                  label: "Superfast",
                  value: `"Superfast"`,
                },
                { label: "Duronto", value: `"Duronto"` },
                { label: "Rajdhani", value: `"Rajdhani"` },
              ]}
              onChange={(e) => {
                setTrainType(e);
                oneShotLoading();
              }}
            />
          </div>
        </div>

        <div className="pl-3 pt-6 flex flex-col gap-3 w-[1000px]">
          {trains.map((train) => (
            <TrainCard train={train} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainList;
