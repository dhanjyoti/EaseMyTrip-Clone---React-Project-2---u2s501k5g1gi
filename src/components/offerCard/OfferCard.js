import React from 'react'
import CardOffer_code from '../../images/cardOffer_code'
import './offerCard.css'

const OfferCard = ({tagline, dealName, code, image, para, validity, className}) => {
  return (
    <div className='border-2 border-blue-600 w-[330px] h-[290px]'>
        <div className={'flex flex-row justify-between px-4 pt-[10px] ' + className}>
            <div>
                <div>
                    <p>{tagline}</p>
                    <p>{dealName}</p>
                </div>
                <div>
                    <div>
                        <p>Use Code:</p>
                    </div>
                    <div className='flex flex-row'>
                        <h3>{code}</h3>
                        <CardOffer_code/>
                    </div>
                </div>
            </div>
            <div><img className='w-[120px] h-[150px] rounded-t-full' src={image}/></div>
        </div>
        <div>{para}</div>
        <div>{validity}</div>
    </div>
  )
}

export default OfferCard;