import React from 'react';
import './componentStyles/header.css'
import Logo from '../images/emtlogo_new6';
import NavItems from './NavItems';

const Header = ({text}) => {
  return (
    <div className='main-div'>
        <div>
            <div><Logo /></div>
            <ul>
                <li><NavItems text={"FLIGHT"} /></li>
            </ul>
        </div>
        <div></div>
    </div>
  )
}

export default Header