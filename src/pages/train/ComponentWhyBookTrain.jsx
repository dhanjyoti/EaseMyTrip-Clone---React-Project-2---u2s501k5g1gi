import React from 'react'

const ComponentWhyBookTrain = ({serviceIcon, heading, para, rightArrow}) => {
  return (
    <div className='p-[10px] border border-[#ccc] flex flex-row gap-3 items-center rounded-md shadow-[2px_2.5px_5px_-1px_#ccc]'>
        <img className='w-[49px] h-[61] my-auto mx-[5px]' src={serviceIcon}/>
        <div className='w-60'>
            <p className='text-[15px] font-semibold'>{heading}</p>
            <p className='text-xs'>{para}</p>
        </div>
        <div className='w-8 pl-2'>
            {rightArrow && <img className='w-[18px] h-[18px]' src={rightArrow}/>}
        </div>
    </div>
  )
}

export default ComponentWhyBookTrain