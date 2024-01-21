import React from 'react';
import Recommended from '../../images/bus_Icons/recmmed-icn.svg';
import gps from '../../images/bus_Icons/gps.png';
import readingLight from '../../images/bus_Icons/reading-light.png';
import waterBottles from '../../images/bus_Icons/bottle.png';
import AC from '../../images/bus_Icons/AC.png';
import firstAir from '../../images/bus_Icons/first_aid_box.png';
import LiveTracking from '../../images/bus_Icons/Gps-color-icon.svg';
import ArrowIcon from '../../images/bus_Icons/right-arrow.svg';
// import starIcon from '../../images/bus_Icons/star-white.svg';
import starIcon from '../../images/bus_Icons/starIcon.jpg';

const BusDetailsCard = () => {
  return (
    <div className='border border-[#b8d0e5] rounded-[4px] w-[885px] bg-white'>
        <div className='p-4 flex flex-row justify-between'>
            <div className='min-w-[279px]'>
                <div className='text-[16px] font-semibold'>Bus Company</div>
                <div className='text-[13px] text-[#737373] py-1'>Bus Name</div>
                <div className='flex flex-row gap-1'>
                    <div className='text-[11px] border border-solid border-[#63c812] rounded-[4px] flex flex-row w-[55px] items-center'>
                        <img className='w-[27px] h-[20px] pr-1' src={starIcon}/>
                        <span>4.8</span>
                    </div>
                    <div>
                        <img src={Recommended}/>
                    </div>
                </div>
                <div className='flex flex-row w-5 h-5 mt-[10px]'>
                    <img className='mr-[7px]' src={gps} />
                    <img className='mr-[7px]' src={readingLight} />
                    <img className='mr-[7px]' src={waterBottles} />
                    <img className='mr-[7px]' src={AC} />
                    <img className='mr-[7px]' src={firstAir} />
                    <span className='text-[13px] text-[#2196f3] align-top'>1+</span>
                </div>
            </div>
            <div>
                <div className='text-[16px] font-semibold'>19:30</div>
                <div className='text-[13px] text-[#737373]'>Bangalore</div>
            </div>
            <div className='flex flex-col items-center'>
                <img className='w-[15px] h-[15px]' src={ArrowIcon} />
                <div className='text-[11px] text-[#737373]'>12h 25m</div>
            </div>
            <div>
                <div className='text-[16px] font-semibold'>07:55</div>
                <div className='text-[13px] text-[#737373]'>Hyderabad</div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='web-rupee line-through'>₹ 799</div>
                <div className='web-rupee text-xl font-semibold text-[#d63b05]'>₹ 749</div>
                <div className='text-[10px] font-semibold text-[#0ab707] bg-[honeydew] border border-dashed border-[#6ad36a] py-[1px] px-[2px]'>BOOKING Applied</div>
            </div>
            <div className='flex flex-col text-center'>
                <button className='bg-[#ef6614] text-white text-sm rounded-[3px] py-[6px] px-5 font-medium cursor-pointer'>Select Seats</button>
                <p className='text-[11px] text-[#737373] mt-1'>39 Seat(s) left</p>
            </div>
        </div>
        <div className='flex flex-row justify-between bg-[#f9f9f9] pl-2 pr-4'>
            <ul className='flex flex-row items-center text-xs text-[#737373]'>
                <li className="p-2">Amenities</li>|
                <li className="p-2">Boarding & Dropping Points</li>|
                <li className="p-2">Cancellation Policy</li>|
                <li className="p-2">4 Photo</li>
            </ul>
            <div className='flex flex-row items-center gap-1'>
                <img className='w-[15px] h-[15px]' src={LiveTracking}/>
                <p className='text-[13px] font-medium'>Live Tracking</p>
            </div>
        </div>
    </div>
  )
}

export default BusDetailsCard