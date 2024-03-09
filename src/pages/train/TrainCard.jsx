import React from 'react'
// import RightArrow from '../../images/trainComponent/arrow-right.svg';

const TrainCard = () => {
  return (
    <div className='border border-[#E3DFDF] rounded-md bg-white'>
        <div className='bg-[#F2F9FF] flex justify-between gap-[560px] py-2 px-6'>
            <div className='flex flex-row items-center gap-2 text-xs'>
                <span>ANDI</span>
                {/* <span><img src={RightArrow}/></span> */}
                <span>HWH</span>
            </div>
            <div className='flex flex-row text-[11px]'>
                <span className='text-[#737373]'>Runs On :&nbsp;</span>
                <span className='text-[#4fc82e] font-semibold'>S M T W T F S</span>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between p-[14px]'>
            <div>
                <div className='text-base font-semibold'>Netaji Express</div>
                <div className='bg-[#F2F9FF] border border-[#B6D5F0] text-[15px] font-medium px-[5px] py-[3px] rounded-[3px] inline-block'>12134</div>
            </div>
            <div>
                <div className='text-base font-semibold'>04:44</div>
                <div className='text-[#737373] text-[10px] font-medium'>Adrsh Ngr Delhi</div>
                <div className='text-[#737373] text-[10px] font-medium '>Tue, 13 February 2024</div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='text-[#737373] text-xs'>27 h 21 m</div>
                <div className='flex flex-row items-center'>
                    <span className='w-[6px] h-[6px] rounded-[6px] bg-[#ddddde]'></span>
                    <span className='h-[1px] bg-[#ddddde] my-[5px] w-[130px]'></span>
                    <span className='w-[6px] h-[6px] rounded-[6px] bg-[#ddddde]'></span>
                </div>
                <div className='text-xs text-[#2662D9] font-bold'>View Route</div>
            </div>
            <div>
                <div className='text-base font-semibold'>11:44</div>
                <div className='text-[#737373] text-[10px] font-medium'>Howrah Jn</div>
                <div className='text-[#737373] text-[10px] font-medium'>Wed, 14 February 2024</div>
            </div>
            <div className='w-36'></div>
        </div>
        <div className='border-t border-[#eee] p-[14px]'>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-[14px] font-medium'>Seat Availability</div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='text-[14px] font-medium'>Quota</div>
                    <div>
                        <select className="border border-[#cccccc] rounded-full px-2 py-2 text-[13px]" name="quotaSelectdd0" id="quotaSelectdd0" quota="">
                            <option ng-repeat="_Quota in Quota" value="GN">General</option>
                            <option ng-repeat="_Quota in Quota" value="SS">Senior Citizen</option>
                            <option ng-repeat="_Quota in Quota" value="LD">Ladies Quota</option>
                            <option ng-repeat="_Quota in Quota" value="DP">DP</option>
                            <option ng-repeat="_Quota in Quota" value="TQ">Tatkal</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className='inline-block py-2'>
                    <div className='border border-[#f9f2b4] bg-[#fefae5] flex flex-col items-center rounded-[4px] px-[10px] pt-2 pb-[6px]'>
                        <div className='text-[11px] font-medium'>Sleeper Class (SL)</div>
                        <div className='text-[11px] font-semibold'>
                            <span>₹</span>
                            <span>678</span>
                        </div>
                        <div className='text-red-500 font-semibold text-[11px]'>RLWL150/WL108</div>
                        <button className='bg-[#ef6614] text-white text-[11px] rounded-full px-[10px] py-[2px] font-semibold'>BOOK NOW</button>
                    </div>
                    <div className='text-[10px] text-[#737373] text-center'>yesterday</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainCard