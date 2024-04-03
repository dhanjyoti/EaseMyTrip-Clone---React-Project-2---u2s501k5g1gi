import React, { useState } from "react";
import "./header.css";
import Logo from "../../images/emtlogo_new6";
import NavItems from "./NavItems";
import JoinEmtpro from "../../images/emtpro-header-icon";
import HelpComponent from "./HelpComponent";
import DownArrow from "../../images/down-arrow-5-svgrepo-com";
import HoverCard from "../hoverCard/HoverCard";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import { Link, NavLink } from "react-router-dom";
import useUser from "../../utils/useUser";
import { useAuth } from "../../utils/useAuth";

const navList = [
  {
    label: "FLIGHT",
  },
  {
    label: "HOTELS",
  },
  {
    label: "TRAINS",
  },
  {
    label: "BUS",
  },
  {
    label: "ACTIVITIES",
  },
];

const moreOptions = [
  "CHAPERS",
  "CRUISE",
  "GIFT CARD",
  "OFFERS",
  "CORPORATE TRAVEL",
  "AGENT LOGIN",
];

const Header = () => {
  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);
  const { user, setUser } = useUser();
  const { showLogin, setShowLogin }=useAuth()

  const logout = ()=>{
    setUser(null)
  }
  return (
    <div className="flex flex-row justify-between mx-[110px] border-2 border-white h-[65px]">
      <div className="flex flex-row">
        <div>
          <Link to={"/"}><Logo /></Link>
        </div>
        <ul className="flex flex-row items-center list-none">
          {navList.map((item) => (
            <li
              key={item.label}
              className="border-r h-6 border-gray-400 text-xs font-medium flex items-center"
            >
              <NavLink
                to={`/${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef6614] border-b-4 border-b-[#ef6614] py-4"
                    : "border-b-4 border-b-white"
                }
              >
                <NavItems text={item.label} />
              </NavLink>
            </li>
          ))}

          <div className="group/more">
            <HelpComponent
              className="border-none pl-3 text-xs font-medium"
              text={"MORE"}
              icon={<DownArrow />}
            />
            <ul className="transform divide-y divide-gray-300 transition-[max-height] duration-300 shadow-[0_0_7px_rgba(0,0,0,.4)] z-[999] absolute max-h-0 overflow-hidden bg-white group-hover/more:max-h-full">
              {moreOptions.map((mo) => (
                <li key={mo} className="relative px-2.5 py-1.5">
                  {mo}
                  <Link to="/under-construction" className="absolute inset-0"></Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <li className='p-[10px]'><NavItems text={"More"} /></li> */}
        </ul>
      </div>
      <div className="flex flex-row">
        <div>
          <JoinEmtpro />
        </div>
        <div className="flex flex-row items-center">
          <div>
            <HoverCard
              trigger={
                <button>
                  <HelpComponent
                    className={"helpline"}
                    text={"24X7 Helpline"}
                    icon={<DownArrow />}
                  />
                </button>
              }
            >
              <div>Tel: 011 - 83663234, 43224563</div>
              <div>care@easemytrip.com</div>
            </HoverCard>
          </div>
          <div className="flex flex-col items-end">
            <HelpComponent
              className={"flag"}
              text={"India"}
              icon={<DownArrow />}
            />
            <HoverCard
              trigger={
                <button>
                  <HelpComponent
                    className={"profile"}
                    text={"My Account"}
                    icon={<DownArrow />}
                  />
                </button>
              }
            >
              {user ? (
                <div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">{user.name}</span>
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div>
                    <button onClick={logout}>Logout</button>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <button onClick={() => setSignupDialog(true)}>
                      Signup
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setLoginDialog(true)}>Login</button>
                  </div>
                </div>
              )}
            </HoverCard>

            {/* Login */}
            <Login open={loginDialog  || showLogin} openChange={(e)=>{
              setLoginDialog(e)
              setShowLogin(e)
            }} />

            {/* Signup */}
            <Signup
              open={signupDialog}
              openChange={setSignupDialog}
              onSuccess={() => {
                setSignupDialog(false);
                setLoginDialog(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
