import React from 'react';
import './componentStyles/header.css'
import Logo from '../images/emtlogo_new6';
import NavItems from './NavItems';
import JoinEmtpro from '../images/emtpro-header-icon';
import HelpComponent from './HelpComponent';
import DownArrow from '../images/down-arrow-5-svgrepo-com';

const Header = () => {
  return (
    <div className='main-div'>
      <div className='navbar'>
        <div><Logo /></div>
        <ul className='nav-item-list'>
          <li className='nav-list'><NavItems text={"FLIGHT"} /></li>
          <li className='nav-list'><NavItems text={"HOTELS"} /></li>
          <li className='nav-list'><NavItems text={"FLIGHT + HOTEL"} /></li>
          <li className='nav-list'><NavItems text={"TRAINS"} /></li>
          <li className='nav-list'><NavItems text={"BUS"} /></li>
          <li className='nav-list'><NavItems text={"HOLIDAYS"} /></li>
          <li className='nav-list'><NavItems text={"CABS"} /></li>
          <li className='nav-list'><NavItems text={"ACTIVITIES"} /></li>
          <li className='nav-list more'><NavItems text={"More"} /></li>
        </ul>
      </div>
      <div className='right-navbar'>
        <div className='join-emtpro'>
          <JoinEmtpro />
        </div>
        <div className='helpline-div'>
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