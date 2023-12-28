import React from 'react'
import GiftBox from '../images/gift-box.svg';

const FlightListOfferCode = ({code, tagline}) => {
  return (
    <div className='snap-start flex flex-row shrink-0 items-center bg-[#e4fbf1] rounded-md border border-[#c3ead9] text-[11px] p-2 min-h-[51px] m-auto w-[302px]'>
        <div className='mr-[10px] flex-shrink-0 w-5 h-5'><img src={GiftBox}/></div>
        <div className='overflow-hidden line-clamp-2'>
            <strong>{code}</strong>
            {tagline}
        </div>
    </div>
  )
}

export default FlightListOfferCode