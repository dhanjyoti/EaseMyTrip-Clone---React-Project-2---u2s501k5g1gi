import React from 'react'
import CardOffer_code from '../../images/cardOffer_code'
import './offerCard.css'

const OfferCard = ({tagline, dealName, code, image, para, validity, className, offerBg}) => {
  return (
    <div className='w-[330px] flex flex-col gap-5 shadow-[0_0_7px_rgb(0_-1_6_/_6%)_inset] border border-[#F5F5F5] p-[10px] rounded'>
        <div className={'flex flex-row justify-between px-4 pt-[10px] text-white rounded-xl min-h-[170px]' +" "+ className}>
            <div className='flex flex-col'>
                <div className='flex-1'>
                    <p className=''>{tagline}</p>
                    <p className='text-2xl font-semibold'>{dealName}</p>
                </div>
                <div style={{background:offerBg}} className=' mb-2 border border-dashed border-white rounded w-fit px-2 py-0.5'>
                    <div>
                        <p className='text-xs font-light '>Use Code:</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <span>{code}</span>
                        <CardOffer_code size={14}/>
                    </div>
                </div>
            </div>
            <img className='w-[120px] rounded-t-full self-end' src={image}/>
        </div>
        <div className='flex flex-col gap-3'>
        <div className='font-medium text-sm'>{para}</div>
        <div className='text-xs text-black/60'>{validity}</div>
        </div>
    </div>
  )
}

export default OfferCard;