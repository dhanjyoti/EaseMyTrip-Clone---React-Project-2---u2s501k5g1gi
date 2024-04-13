import { useEffect, useState } from "react";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import emi from "../../images/payment/emi.png";
import ui from "../../images/payment/upi.png";
import ui_inactiev from "../../images/payment/upi-gray.png";
import ui1 from "../../images/payment/upi1.png";
import ui2 from "../../images/payment/upi2.png";
import ui3 from "../../images/payment/upi3.png";
import cards from "../../images/payment/cards.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
// Credit/Debit/ATM Cards
const tabs = [
  {
    label: "UPI",
    value: "upi",
    desc: "Make online payment directly from bank",
    icon_active: ui,
    icon_inactive: ui_inactiev,
  },
  {
    label: "Credit/Debit/ATM Cards",
    value: "card",
    desc: "Use VISA, Mastercard, American Express etc.",
    icon_active: emi,
    icon_inactive: emi,
  },
  // {
  //   label: "EMI",
  //   value: "emi",
  //   desc: "HSBC, RBL, ICICI, Yes and others bank for EMI",
  //   icon_active: emi,
  //   icon_inactive: emi,
  // },
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

const UserDetail = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  error,
}) => {
  return (
    <HeaderItem header={"User detail"}>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              className="px-2 py-1.5 border border-gray-200 rounded"
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              className="px-2 py-1.5 border border-gray-200 rounded"
              placeholder="Last name"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
          </div>
        </div>
        {error && (
          <div className="text-red-600 text-sm">
            First and last name is required.
          </div>
        )}
      </div>
    </HeaderItem>
  );
};
const Payment = ({ price, onSuccess }) => {
  const [selected, setSelected] = useState("upi");

  const [upiId, setUpiId] = useState("");
  const [upiName, setUpiName] = useState("");

  const [error, setError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");

  useEffect(() => {
    if (userError && firstName && lastName) {
      setUserError(false);
    }
  }, [firstName, lastName]);

  useEffect(() => {
    console.log(cardNumber.length);
    if (error && cardNumber.length > 12) {
      setError(false);
    }
  }, [cardNumber]);

  return (
    <div className="flex flex-col gap-7">
      <UserDetail
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setlastName}
        error={userError}
      />
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
          {selected === "upi" && (
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
                  <span className="text-2xl font-bold text-red-600">
                    {price}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (!firstName || !lastName) {
                        setUserError(true);
                        return;
                      }
                      if (!upiId || !upiName) {
                        setError(true);
                      } else {
                        onSuccess?.(`${firstName} ${lastName}`);
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
                      Go to UPI linked app or Tap on the notification received
                      on your UPI App for the payment.
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
          )}
          {selected === "card" && (
            <div className="flex p-4 text-lg font-semibold w-full min-h-[496px]">
              <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-end justify-between gap-2 w-full">
                    <div className="flex-1 flex flex-col">
                      <span>Enter Your Card No..</span>
                      <div className="nospinner relative flex items-center justify-center">
                        <input
                          value={cardNumber}
                          type="number"
                          onChange={({ target }) => setCardNumber(target.value)}
                          className="px-2 py-1.5 border border-gray-200 rounded !pr-[168px] w-full"
                          placeholder="xxxx xxxx xxxx xxxx"
                        />
                        <img
                          src={cards}
                          className="absolute right-[10px] h-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                  {!cardNumber && error && (
                    <div className="text-red-600 text-sm">
                      Card number is required.
                    </div>
                  )}
                  {cardNumber.length < 12 && error && (
                    <div className="text-red-600 text-sm">
                      Card number length should be at least 12.
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-end justify-between gap-2 w-full">
                    <div className="flex-1 flex flex-col">
                      <span>Enter Card holder name</span>
                      <input
                        value={holderName}
                        onChange={({ target }) => setHolderName(target.value)}
                        className="px-2 py-1.5 border border-gray-200 rounded"
                        placeholder="Card holder name"
                      />
                    </div>
                  </div>
                  {!holderName && error && (
                    <div className="text-red-600 text-sm">
                      Card holder is required.
                    </div>
                  )}
                </div>

                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-1">
                    <span className="font-bold text-xl">Total Fare:</span>{" "}
                    <span className="text-2xl font-bold text-red-600">
                      {price}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        if (!firstName || !lastName) {
                          setUserError(true);
                          return;
                        }
                        if (selected === "card") {
                          if (!cardNumber || !holderName) {
                            setError(true);
                          } else {
                            if (cardNumber.length < 12) {
                              setError(true);
                              return
                            }
                            onSuccess?.(`${firstName} ${lastName}`);
                          }
                        } else {
                          if (!upiId || !upiName) {
                            setError(true);
                          } else {
                            onSuccess?.(`${firstName} ${lastName}`);
                          }
                        }
                      }}
                      className="bg-[#ef6614] text-white text-[20px] rounded-full py-2 px-4"
                    >
                      Make a payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </HeaderItem>
    </div>
  );
};

export default Payment;
