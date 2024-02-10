import React from 'react'
import RightArrow from '../../images/trainComponent/arrow-right.svg';

const TrainCard = () => {
  return (
    <div className='border border-[#E3DFDF] rounded-md bg-white'>
        <div className='bg-[#F2F9FF] flex flex-row justify-between gap-[670px] py-2 px-6'>
            <div className='flex flex-row items-center gap-2 text-xs'>
                <span>ANDI</span>
                <span><img src={RightArrow}/></span>
                <span>HWH</span>
            </div>
            <div className='flex flex-row text-[11px]'>
                <span className='text-[#737373]'>Runs On :&nbsp;</span>
                <span className='text-[#4fc82e] font-semibold'>S M T W T F S</span>
            </div>
        </div>
        <div className=''>
            <div>
                <div className='text-base font-semibold'>Netaji Express</div>
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default TrainCard