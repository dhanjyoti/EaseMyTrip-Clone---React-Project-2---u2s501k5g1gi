import React from 'react'

const BusBenefitCard = ({icon, head, para}) => {
  return (
    <div className='flex flex-col items-center text-center py-[7px] px-1 rounded-2xl max-w-[266px] max-h-[199px] border border-gray-300'>
        <img className='w-[95px] h-[68px] my-[17px]' src={icon}/>
        <h4 className='text-base pb-3'>{head}</h4>
        <p className='text-xs'>{para}</p>
    </div>
  )
}

export default BusBenefitCard