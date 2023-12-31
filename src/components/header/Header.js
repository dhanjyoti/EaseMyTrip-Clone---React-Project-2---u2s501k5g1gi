import React, { useState } from 'react';
import './header.css'
import Logo from '../../images/emtlogo_new6';
import NavItems from './NavItems';
import JoinEmtpro from '../../images/emtpro-header-icon';
import HelpComponent from './HelpComponent';
import DownArrow from '../../images/down-arrow-5-svgrepo-com';
import HoverCard from '../hoverCard/HoverCard';
import Signup from '../signup/Signup';
import Login from '../login/Login';
import { Link } from 'react-router-dom';


const navList = [
  {
    label: "FLIGHT"
  },
  {
    label: "HOTELS"
  },
  {
    label: "FLIGHT + HOTEL"
  },
  {
    label: "TRAINS"
  },
  {
    label: "BUS"
  },
  {
    label: "HOLIDAYS"
  },
  {
    label: "CABS"
  },
  {
    label: "ACTIVITIES"
  },

]

const Header = () => {


  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);

  return (
    <div className='flex flex-row border-2 border-green-500 h-[65px]'>
      <div className='flex flex-row'>
        <div><Logo /></div>
        <ul className='flex flex-row items-center list-none'>
          {navList.map((item) => ( 
            <li key={item.label} className='p-[10px] border-r border-gray-500'>
              <Link to={`/${item.label.toLowerCase()}`}>
                <NavItems text={item.label} />
              </Link>
            </li>))}

          <HoverCard trigger={<button><HelpComponent className='border-none pl-3' text={"More"} icon={<DownArrow />} /></button>}>
            <ul>
              <li>CHARTERS</li>
              <li>CRUISE</li>
              <li>GIFT CARD</li>
              <li>OFFERS</li>
              <li>CORPORATE TRAVEL</li>
              <li>AGENT LOGIN</li>
            </ul>
          </HoverCard>
          {/* <li className='p-[10px]'><NavItems text={"More"} /></li> */}
        </ul>
      </div>
      <div className='flex flex-row'>
        <div>
          <JoinEmtpro />
        </div>
        <div className='flex flex-row items-center'>
          <div>
            <HoverCard trigger={<button><HelpComponent className={"helpline"} text={"24X7 Helpline"} icon={<DownArrow />} /></button>}>
              <div>Tel: 011 - 83663234, 43224563</div>
              <div>care@easemytrip.com</div>
            </HoverCard>
          </div>
          <div>
            <HelpComponent className={"flag"} text={"India"} icon={<DownArrow />} />
            <HoverCard trigger={<button><HelpComponent className={"profile"} text={"My Account"} icon={<DownArrow />} /></button>}>
              <div>
                <button onClick={() => setSignupDialog(true)}>Signup</button>
              </div>
              <div>
                <button onClick={() => setLoginDialog(true)}>Login</button>
              </div>
            </HoverCard>

            {/* Login */}
            <Login open={loginDialog} openChange={setLoginDialog} />

            {/* Signup */}
            <Signup open={signupDialog} openChange={setSignupDialog} onSuccess={() => {
              setSignupDialog(false)
              setLoginDialog(true)
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header