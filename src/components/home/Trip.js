import React from 'react';
import './home.css'

const Trip = ({text, onClick}) => {
  return (
    <div onClick={onClick} className='trip-option'>
        {text}
    </div>
  )
}

export default Trip;