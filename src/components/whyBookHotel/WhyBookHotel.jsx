import React from 'react'
import './whybookhotel.css';

const WhyBookHotel = ({icon, head, para}) => {
  return (
    <div className='main-div'>
        <div className='first-item'>
            <img src={icon} />
        </div>
        <div className='second-item'>{head}</div>
        <div className='third-item'>{para}</div>
    </div>
  )
}

export default WhyBookHotel;