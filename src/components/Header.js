import React from 'react';
import './componentStyles/header.css'
import Logo from '../images/emtlogo_new6';
import NavItems from './NavItems';

const Header = () => {
  return (
    <div className='main-div'>
        <div>
            <div><Logo /></div>
            <ul className='nav-item-list'>
                <li><NavItems text={"FLIGHT"} /></li>
                <li><NavItems text={"HOTELS"} /></li>
                <li><NavItems text={"FLIGHT + HOTEL"} /></li>
                <li><NavItems text={"TRAINS"} /></li>
                <li><NavItems text={"BUS"} /></li>
                <li><NavItems text={"HOLIDAYS"} /></li>
                <li><NavItems text={"CABS"} /></li>
                <li><NavItems text={"ACTIVITIES"} /></li>
            </ul>
        </div>
        <div></div>
    </div>
  )
}

export default Header