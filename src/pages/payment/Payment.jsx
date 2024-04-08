import { useState } from "react";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import emi from "../../images/payment/emi.png";
import ui from "../../images/payment/upi.png";
import ui_inactiev from "../../images/payment/upi-gray.png";
import ui1 from "../../images/payment/upi1.png";
import ui2 from "../../images/payment/upi2.png";
import ui3 from "../../images/payment/upi3.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const tabs = [
  {
    label: "UPI",
    value: "upi",
    desc: "Make online payment directly from bank",
    icon_active: ui,
    icon_inactive: ui_inactiev,
  },
  {
    label: "EMI",
    value: "emi",
    desc: "HSBC, RBL, ICICI, Yes and others bank for EMI",
    icon_active: emi,
    icon_inactive: emi,
  },
];

const TabItem = ({
  label,
  icon_active,
  icon_inactive,
  desc,
  onClick,
  active,
}) => {
  return (
    <div
      className={classNames(
        "relative flex flex-row items-start gap-2 border-gray-300 px-3 py-2 cursor-pointer",
        {
          "border-r bg-gray-100": !active,
        }
      )}
      onClick={onClick}
    >
      {active && (
        <div className="w-[4px] bg-[#2196f3] absolute left-0 top-0 bottom-0"></div>
      )}
      <div>
        <img
          src={(() => {
            if (active) {
              return icon_active;
            } else {
              return icon_inactive || icon;
            }
          })()}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={classNames({
            "text-[#2196f3] font-bold": active,
          })}
        >
          {label}
        </div>
        <div className="text-xs">{desc}</div>
      </div>
    </div>
  );
};
const Payment = ({price}) => {
  const [selected, setSelected] = useState("upi");

  const [upiId, setUpiId] = useState("");
  const [upiName, setUpiName] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate()
  return (
    <HeaderItem header={"Payment mode"}>
      <div className="flex flex-row payment-block">
        <div className="divide-y border-l border-gray-200 w-[300px]">
          {tabs.map((t) => (
            <TabItem
              label={t.label}
              desc={t.desc}
              icon_active={t.icon_active}
              icon_inactive={t.icon_inactive}
              onClick={() => {
                setSelected(t.value);
              }}
              active={selected === t.value}
            />
          ))}
        </div>
        {selected === "upi" ? (
          <div className="flex flex-col gap-5 w-full p-3">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end justify-between gap-2 w-full">
                <div className="flex-1 flex flex-col">
                  <span>Enter your UPI ID</span>
                  <input
                    value={upiId}
                    onChange={({ target }) => setUpiId(target.value)}
                    className="px-2 py-1.5 border border-gray-200 rounded"
                    placeholder="Enter your UPI ID"
                  />
                </div>
                <div className="flex flex-row items-center gap-2 flex-1">
                  <span>@</span>
                  <input
                    value={upiName}
                    onChange={({ target }) => setUpiName(target.value)}
                    className="px-2 py-1.5 border border-gray-200 rounded flex-1"
                    placeholder="upi"
                  />
                </div>
              </div>
              {(!upiId || !upiName) && error && (
                <div className="text-red-600 text-sm">UPI is required.</div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <span className="font-bold text-xl">Total Fare:</span>{" "}
                <span className="text-2xl font-bold text-red-600">{price}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    if(!upiId || !upiName){
                        setError(true)
                    }else{
                        navigate("/booking-success")
                    }
                  }}
                  className="bg-[#ef6614] text-white text-[20px] rounded-full py-2 px-4"
                >
                  Make a payment
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[#f4f4f5] rounded py-4 px-8 mt-3">
              <div className="font-bold text-xl">How to pay through UPI?</div>
              <div className="flex flex-col gap-5 text-[#484848] text-sm">
                <div className="flex flex-row items-center gap-3">
                  <span className="h-16 w-16 rounded-full">
                    <img src={ui1} className="mix-blend-multiply" />
                  </span>
                  <span>
                    Go to UPI linked app or Tap on the notification received on
                    your UPI App for the payment.
                  </span>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <span className="h-16 w-16 rounded-full">
                    <img src={ui2} className="mix-blend-multiply" />
                  </span>
                  <span>
                    Check pending transactions in your linked UPI app.
                  </span>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <span className="h-16 w-16 rounded-full">
                    <img src={ui3} className="mix-blend-multiply" />
                  </span>
                  <span>
                    Make the payment by selecting the bank and typing the UPI
                    PIN.
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 text-lg font-semibold w-full min-h-[496px]">
            This option is not available.
          </div>
        )}
      </div>
    </HeaderItem>
  );
};

export default Payment;
