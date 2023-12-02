import React from 'react';
import './header.css'
import Logo from '../../images/emtlogo_new6';
import NavItems from './NavItems';
import JoinEmtpro from '../../images/emtpro-header-icon';
import HelpComponent from './HelpComponent';
import DownArrow from '../../images/down-arrow-5-svgrepo-com';
import Dialog from '../dialog/Dialog';

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

  return (
    <div className='flex flex-row border-2 border-green-500 h-[65px]'>
      <div className='flex flex-row'>
        <div><Logo /></div>
        <ul className='flex flex-row items-center list-none'>
          {navList.map((item) => <li key={item.label} className='p-[10px] border-r border-gray-500'><NavItems text={item.label} /></li>)}

          <li className='p-[10px]'><NavItems text={"More"} /></li>
        </ul>
      </div>
      <div className='flex flex-row'>
        <div>
          <JoinEmtpro />
        </div>
        <div className='flex flex-row items-center'>
          <div>
            <HelpComponent className={"helpline"} text={"24X7 Helpline"} icon={<DownArrow />} />
          </div>
          <div>
            <HelpComponent className={"flag"} text={"India"} icon={<DownArrow />} />
            <Dialog
              title={"Login or Create an account"}
              content={
                <div>
                  <div>
                    Email ID or Mobile Number
                  </div>
                  <div>
                    <input type='text' placeholder='Enter email ID' />
                  </div>
                  <div>
                    {/* <input type='button'>CONTINUE</input> */}
                  </div>
                  <div>
                    {/* By logging in, I understand & agree to EaseMyTrip
                    <span>terms of use</span> and <span>privacy policy</span> */}
                  </div>
                </div>
              }
              trigger={<button><HelpComponent className={"profile"} text={"My Account"} icon={<DownArrow />} /></button>} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header