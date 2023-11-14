import React from 'react';
import './header.css'
import Logo from '../../images/emtlogo_new6';
import NavItems from './NavItems';
import JoinEmtpro from '../../images/emtpro-header-icon';
import HelpComponent from './HelpComponent';
import DownArrow from '../../images/down-arrow-5-svgrepo-com';

const navList = [
  {
    label:"FLIGHT"
  },
  {
    label:"HOTELS"
  },
  {
    label:"FLIGHT + HOTEL"
  },
  {
    label:"TRAINS"
  },
  {
    label:"BUS"
  },
  {
    label:"HOLIDAYS"
  },
  {
    label:"CABS"
  },
  {
    label:"ACTIVITIES"
  },

]

const Header = () => {

  return (
    <div className='flex flex-row border-2 border-green-500 h-[65px]'>
      <div className='flex flex-row'>
        <div><Logo /></div>
        <ul className='flex flex-row items-center list-none'>
          {navList.map((item)=><li key={item.label} className='p-[10px] border-r border-gray-500'><NavItems text={item.label} /></li>)}

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
            <HelpComponent className={"profile"} text={"My Account"} icon={<DownArrow />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header