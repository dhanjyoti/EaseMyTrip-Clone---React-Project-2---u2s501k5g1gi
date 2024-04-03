import React, { useEffect, useId, useState } from "react";
import BusDetailsCard from "./BusDetailsCard";
import BusSearchBar from "./searchbar";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import BusSeatSelector from "./bus-seat-selector";
import { useAuth } from "../../utils/useAuth";

const CustomRadioGroup = ({ items }) => {
  const pId = useId();
  return (
    <div className="flex flex-row items-center rounded border border-gray-300 divide-x">
      {items?.map((item) => {
        const id = useId();
        return (
          <div>
            <input type="radio" className="peer" id={id} name={pId} />
            <label htmlFor={id} className="peer-checked:bg-red-300">
              {item.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const RadioTimeComponent = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center p-2">
      <span>{icon}</span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
};

const CheckBoxItem = ({ children }) => {
  const id = useId();
  return (
    <div className="flex flex-row items-center gap-3 text-xs">
      <input
        type="checkbox"
        id={id}
        className="h-[16px] aspect-square border-black/25"
      />
      <label htmlFor={id} className="flex-1">
        {children}
      </label>
    </div>
  );
};

const FilterItemWrapper = ({ children }) => {
  return <div className="px-2 py-3">{children}</div>;
};

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

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

  const defaultFilter = [
    { label: "One Time Guarantee" },
    { label: "GPS Enabled Buses" },
  ];
  const freeCancellation = [
    { label: "12 hours", number: "0" },
    { label: "24 hours", number: "0" },
    { label: "48 hours", number: "0" },
    { label: "72 hours", number: "0" },
  ];
  const busType = [
    { label: "AC", number: "0" },
    { label: "Non AC", number: "0" },
    { label: "Sleeper", number: "0" },
    { label: "Seater", number: "0" },
  ];

  const amenities = [
    { label: "GPS", number: "0" },
    { label: "Blanket", number: "0" },
    { label: "TV", number: "0" },
    { label: "Snacks", number: "0" },
    { label: "Pillow", number: "0" },
    { label: "Charging Point", number: "0" },
    { label: "Hammer", number: "0" },
  ];

  const departureTime = [
    { label: "Before 6 AM", icon: "i" },
    { label: "6 AM - 12 AM", icon: "i" },
    { label: "12 AM - 6 PM", icon: "i" },
    { label: "After 6 PM", icon: "i" },
  ];

  const { validate } = useAuth();
  return (
    <div>
      <BusSearchBar s={from} d={to} date={new Date(date)} />
      {selectedBus && (
        <BusSeatSelector
          open={!!selectedBus}
          setOpen={(e) => {
            if (!e) {
              setSelectedBus(null);
            }
          }}
          busDetail={selectedBus}
        />
      )}
      <div className="bg-[#E8F2FA]">
        <div className="flex flex-row justify-center gap-4 py-4">
          <div className="h-fit w-[250px] border border-[#b8d0e5] rounded-[4px] bg-white divide-y">
            <div className="bg-[linear-gradient(90deg,#c7dffe_0%,#d8f2ff_100%)]">
              <FilterItemWrapper>
                <div className="flex flex-row justify-between items-center">
                  <div className="font-semibold">Filter By</div>
                  <div className="text-xs">Reset All</div>
                </div>
              </FilterItemWrapper>
            </div>
            <FilterItemWrapper>
              <div className="flex flex-col gap-2 py-3">
                {defaultFilter.map((df) => {
                  return <CheckBoxItem>{df.label}</CheckBoxItem>;
                })}
              </div>
            </FilterItemWrapper>
            {/* <FilterItemWrapper>
              <div>
                <CustomRadioGroup items={departureTime.map((dt)=>({label:<RadioTimeComponent label={dt.label}/>}))}/>
              </div>
            </FilterItemWrapper> */}
            <FilterItemWrapper>
              <div className="text-sm font-semibold">FREE CANCELLATION</div>
              <div className="flex flex-col gap-2 py-3">
                {freeCancellation.map((fc) => {
                  return (
                    <CheckBoxItem>
                      <div className="flex flex-row items-center justify-between">
                        <span>{fc.label}</span>
                        <span>({fc.number})</span>
                      </div>
                    </CheckBoxItem>
                  );
                })}
              </div>
            </FilterItemWrapper>
            <FilterItemWrapper>
              <div className="text-sm font-semibold">BUS TYPE</div>
              <div className="flex flex-col gap-2 py-3">
                {busType.map((bt) => {
                  return (
                    <CheckBoxItem>
                      <div className="flex flex-row items-center justify-between">
                        <span>{bt.label}</span>
                        <span>({bt.number})</span>
                      </div>
                    </CheckBoxItem>
                  );
                })}
              </div>
            </FilterItemWrapper>
            <FilterItemWrapper>
              <div className="text-sm font-semibold">AMENITIES</div>
              <div className="flex flex-col gap-2 py-3">
                {amenities.map((bt) => {
                  return (
                    <CheckBoxItem>
                      <div className="flex flex-row items-center justify-between">
                        <span>{bt.label}</span>
                        <span>({bt.number})</span>
                      </div>
                    </CheckBoxItem>
                  );
                })}
              </div>
            </FilterItemWrapper>
          </div>
          <div className="p-4 border border-[#b8d0e5] rounded-[4px] flex flex-col min-w-[918px] gap-2 bg-white">
            {buses.map((bus) => (
              <BusDetailsCard
                key={bus._id}
                {...bus}
                onClick={() => {
                  if (validate()) {
                    setSelectedBus(bus);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusList;
